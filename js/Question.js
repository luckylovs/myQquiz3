class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder","Enter Your Name Here....");
    this.input2 = createInput("").attribute("placeholder","Enter Correct Option No..");
    this.button1 = createButton('Submit');
    this.question1 = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');

   this.question2 = createElement('h3');
    this.option5 = createElement('h4');
    this.option6 = createElement('h4');
    this.option7 = createElement('h4');
    this.option8 = createElement('h4');
 
    this.question3 = createElement('h3');
    this.option9 = createElement('h4');
    this.option10 = createElement('h4');
    this.option11 = createElement('h4');
    this.option12 = createElement('h4');

    this.question4 = createElement('h3');
    this.option13 = createElement('h4');
    this.option14 = createElement('h4');
    this.option15 = createElement('h4');
    this.option16 = createElement('h4');

    this.question5 = createElement('h3');
    this.option17 = createElement('h4');
    this.option18 = createElement('h4');
    this.option19 = createElement('h4');
    this.option20 = createElement('h4');


    this.input3 = createInput("").attribute("placeholder","Enter Your Name Here....");
    this.input4 = createInput("").attribute("placeholder","Enter Correct Option No..");
    this.button2 = createButton('Submit');
    this.input5 = createInput("").attribute("placeholder","Enter Your Name Here....");
    this.input6 = createInput("").attribute("placeholder","Enter Correct Option No..");
    this.button3 = createButton('Submit');   
    this.input7 = createInput("").attribute("placeholder","Enter Your Name Here....");
    this.input8 = createInput("").attribute("placeholder","Enter Correct Option No..");
    this.button4 = createButton('Submit');
    this.input9 = createInput("").attribute("placeholder","Enter Your Name Here....");
    this.input10 = createInput("").attribute("placeholder","Enter Correct Option No..");
    this.button5 = createButton('Submit');
   
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button1.hide();
    this.input2.hide();

  
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question1.html("Question1:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question1.position(150, 80);
    this.option1.html("1: Everyone " );
    this.option1.position(150, 100);
    this.option2.html("2: Envelope" );
    this.option2.position(150, 120);
    this.option3.html("3: Estimate " );
    this.option3.position(150, 140);
    this.option4.html("4: Example" );
    this.option4.position(150, 160);

   
   
    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button1.position(290, 300);
    
    this.button1.mousePressed(()=>{
      this.question1.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
     
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);


    this.question2.html("Question2:- In which country chess originate?" );
    this.question2.position(150, 80);
    this.option5.html("1: India " );
    this.option5.position(150, 100);
    this.option6.html("2: Srilanka" );
    this.option6.position(150, 120);
    this.option7.html("3: Japan " );
    this.option7.position(150, 140);
    this.option8.html("4: Nepal" );
    this.option8.position(150, 160);
    this.input3.position(150, 230);
    this.input4.position(350, 230);
    this.button2.position(290, 300);
   
   
    });

    this.button2.mousePressed(()=>{
      this.question1.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
   
      this.question2.hide();
      this.option5.hide();
      this.option6.hide();
      this.option7.hide();
      this.option8.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);


    this.question3.html("question3:- What is the largest island in the UK?" );
    this.question3.position(150, 80);
    this.option9.html("1: Lewis with Harris " );
    this.option9.position(150, 100);
    this.option10.html("2: Great Britain" );
    this.option10.position(150, 120);
    this.option11.html("3:  Isle of Skye " );
    this.option11.position(150, 140);
    this.option12.html("4:  None of these" );
    this.option12.position(150, 160);
    this.input5.position(150, 230);
    this.input6.position(350, 230);
    this.button3.position(290, 300);

   
    });

    this.button3.mousePressed(()=>{
      this.question1.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.question3.hide();
      this.option9.hide();
      this.option10.hide();
      this.option11.hide();
      this.option12.hide();
   
      this.question2.hide();
      this.option5.hide();
      this.option6.hide();
      this.option7.hide();
      this.option8.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);


    this.question4.html("question4:- Which is the largest fresh water lake in the world?" );
    this.question4.position(150, 80);
    this.option13.html("1: Chilika Lake" );
    this.option13.position(150, 100);
    this.option14.html("2:  Lake Baikal" );
    this.option14.position(150, 120);
    this.option15.html("3: Lake Titicaca " );
    this.option15.position(150, 140);
    this.option16.html("4: None of these" );
    this.option16.position(150, 160);
    this.input7.position(150, 230);
    this.input8.position(350, 230);
    this.button4.position(290, 300);

   
    });
    this.button4.mousePressed(()=>{
      this.question1.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.question3.hide();
      this.option9.hide();
      this.option10.hide();
      this.option11.hide();
      this.option12.hide();
      this.question4.hide();
      this.option13.hide();
      this.option14.hide();
      this.option15.hide();
      this.option16.hide();
   
      this.question2.hide();
      this.option5.hide();
      this.option6.hide();
      this.option7.hide();
      this.option8.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);


    this.question5.html("question5:- 1024 bytes = ?" );
    this.question5.position(150, 80);
    this.option17.html("1: 2TB " );
    this.option17.position(150, 100);
    this.option18.html("2: 1GB" );
    this.option18.position(150, 120);
    this.option19.html("3: 1MB " );
    this.option19.position(150, 140);
    this.option20.html("4: 1KB " );
    this.option20.position(150, 160);
    this.input9.position(150, 230);
    this.input10.position(350, 230);
    this.button5.position(290, 300);

   
    });



    this.button5.mousePressed(()=>{
      this.question1.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
   
      this.question2.hide();
      this.option5.hide();
      this.option6.hide();
      this.option7.hide();
      this.option8.hide();
      this.question3.hide();
      this.option9.hide();
      this.option10.hide();
      this.option11.hide();
      this.option12.hide();
      this.input1.hide();
      this.input2.hide();
      this.input3.hide();
      this.input4.hide();
      this.input5.hide();
      this.input6.hide();
      this.input7.hide();
      this.input8.hide();
      this.button1.hide();
      this.button2.hide();
      this.button3.hide();
      this.title.hide();
      this.question4.hide();
      this.option13.hide();
      this.option14.hide();
      this.option15.hide();
      this.option16.hide();
      this.question5.hide();
      this.option17.hide();
      this.option18.hide();
      this.option19.hide();
      this.option20.hide();
      this.input9.hide();
      this.input10.hide();
      this.button4.hide();
      this.button5.hide();
   
   

   
    });

  }


  
}
