import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  OnInit
} from '@angular/core';
import { FormGroup, FormControl , FormBuilder} from '@angular/forms';
import { StudentInfoComponent } from './student-info/student-info.component';
import { ParentInfoComponent } from './parent-info/parent-info.component';
import { AdDirective } from './app.directive';
import { ApiServicesService } from './services/api.services.service';
import { post, posts } from './postmodal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  componentRef: any;
  selectedValue !: number
  ageValue !:number
  ages : Array<any> = []  
  posts !: any
  post !: any
  datas : Array<any> = []
  spec : any

  postForm !: FormGroup
 
  @ViewChild(AdDirective, {static: true}) temp!: AdDirective;

  constructor(private resolver: ComponentFactoryResolver, private apiserv : ApiServicesService, private fb : FormBuilder) { }

 


  ngOnInit(){
    this.rangeNum()

    this.postForm = this.fb.group({
      id : [''],
      title : ['jerin'],
      body : ['jerin'],
      userId : ['']
    })

    this.apiserv.put(this.post).subscribe(item=>{
      this.spec = item
    })
  }

  createComponent(Id: number,age:number) {

    const viewContainerRef = this.temp.viewContainerRef;
    viewContainerRef.clear();

    
    
    if (Id == 1) {
      const factory = this.resolver.resolveComponentFactory(StudentInfoComponent);
      this.componentRef = viewContainerRef.createComponent(factory)

    } else if (Id == 2) {
      const factory = this.resolver.resolveComponentFactory(ParentInfoComponent);
      this.componentRef = viewContainerRef.createComponent(factory)

    } 
    this.componentRef.instance.age = age;
  }

  destroyComponent() {
    this.componentRef.destroy();
  }

  data = [
    {
      "Id": 1,
      "Name": "Student Info"
    },
    {
      "Id": 2,
      "Name": "Parent Info"
    }
  ]
 

  onClick(){
    this.createComponent(this.selectedValue,this.ageValue);
  }

  onClickApi(){
    this.apiserv.getAllPost().subscribe(data=>{
      this.posts = data
      this.post = this.posts.splice(0,5)
    })
  }

  formSubmit(){
    this.apiserv.post(this.postForm.value).subscribe(data=>{
      this.datas.push(data)
      this.post = this.datas
      console.log(this.post);
      
    })
  }

  updateForm(){
    this.apiserv.put(this.postForm.value).subscribe(data=>{
      this.datas.push(data)
      this.post = this.datas
    })
  }

  rangeNum(){
    for(let i=18;i<45;i++){
      this.ages.push(i)
    }
  }
}