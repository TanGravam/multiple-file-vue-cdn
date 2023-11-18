app.component('component-one',{
  template: `<div>{{testComponentData}}</div>`,
  data(){
    return{
      testComponentData: 'Test Component Data'
    }
  }
})