class Question{
    constructor(){
this.title= createElement('h2');
this.question= createElement('h3');
this.option1= createElement('h4')
this.option2= createElement('h4')
this.option3= createElement('h4')
this.option4= createElement('h4')
this.input1= createInput("Name");
this.input2= createInput("Correct Answer");
this.button= createButton("Submit");
    }

    hide(){
this.title.hide();
this.input1.hide();
this.input2.hide();
this.button.hide();
    }

    display(){
 this.title.html("My Quiz Game");
 this.title.position(350,0);

 this.question.html("Which is the largest animal on land?");
 this.question.position(70,80);
 
 this.option1.html("1: Whale");
 this.option1.posiion(150,120);

 this.option2.html("2: Camel");
 this.option2.posiion(150,150);

 this.option3.html("3: Elephant");
 this.option3.posiion(150,180);

 this.option4.html("4: kangaroo");
 this.option4.posiion(150,210);

 this.input1.postion(100,240);
 this.input2.postion(200,240);

 this.button.postion(225,280);

 this.button.mousePressed(()=>{
    this.input1.hide();
    this.input2.hide();
    this.title.hide();
this.button.hide();
    contestant.name = this.input1.value();
    contestant.answer= this.input2.value();
    contestantCount+=1;
    contestant.index = contestantCount;
    contestant.update();
   contestant.updateCount(contestantCount);
    
  });








    }

}