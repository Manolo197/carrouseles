import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carrousel';
  card:any=0;

  cartas:any = [1,2,3,1,2,3,4,1,2,3,4,1,2,3,4,1,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3];
  intervalo:any;
  expand=false;


  @ViewChild('cardsContainer') cardsContainer!:ElementRef;
  
  ngOnInit()
  {
    console.log(this.cartas.length);
    this.setCardAnimation();
  }

  setCardAnimation()
  {
    this.intervalo = setInterval(()=>
    {
      if(this.card === (this.cartas.length-1))
      {
        this.showCard(0);
      }
      else
      {
        this.showCard((this.card+1));
      }


    }, 4000);
  }

  resetAnimaton()
  {
    // this.expand= false;
    // this.showCard(this.card)
    // this.setCardAnimation();
  }

  showCard(card:any)
  {
    if(this.card!=card)
    {
      this.card=card;
    }
    else if(this.card == card && !this.expand)
    {
      clearInterval(this.intervalo);
      this.expand = true;
    }
    else if(this.card == card && this.expand)
    {
      this.expand = false;
      this.setCardAnimation()
    }
  }



}
