import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherApp';

  flag:boolean = false;
  
  public city = '';
  onValueChange(value:string) {
    this.city = value;
    console.log(this.city);
  }

  public temp:number = 0;
  public weather:string = '';

  currentDate = new Date();
  
  public onClick():void {
    this.flag = true;

    const apiId = '931f131dde3f4ae2fcbc3289fc646471';
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.city+'&units=metric&appid='+apiId;

    fetch(url).then((response) => {
      return response.json();
    }).then((data)=> {
      this.weather = data['weather'][0]['main'];
      this.temp = data['main']['temp'];
      
      
    })
    
  }

  public time:any;
  currentTime = setInterval(()=>{
      this.time = new Date();
    },1000);
}
  
