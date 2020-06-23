class Form {
    constructor(){
        
    }
    display(){
        var TITLE = createElement('h1');
        TITLE.html("QUIZ OF HAPPINESS😀😀😀")
        TITLE.position(50,50);
        this.name = createInput("Participant Name");
        this.email = createInput("Participant Email");
        this.button = createButton('Submit');
        var tsaaa =       this.name.position(720, 165);
         var ttsa = this.email.position(720, 255);
        this.button.position(850, 300);


            var q1 = createElement('h2');
            fill ("green");
            q1.html("Q1. DO YOU THINK YOU ARE HAPPY?");
            q1.position(70,110);
            var bq1 = createRadio();     
            bq1.position(150,180);
            bq1.option('YES');    
            bq1.option('NO');
        



            var q2 = createElement('h2');
            fill ("green");
            q2.html("Q2.DO YOU LIKE BEING ANGRY LIKE HULK?");
            q2.position(70,200);
            var bq2 = createRadio();     
            bq2.position(150,270);
            bq2.option('YES');    
            bq2.option('NO');

            var q3 = createElement('h2');
            fill ("green");
            q3.html("Q3.WILL YOU DO ANYTHING ABOUT YOUR ANGER");
            q3.position(70,320);
            var bq3 = createRadio();     
            bq3.position(150,370);
            bq3.option('YES');    
            bq3.option('NO');

            var q4 = createElement('h2');
            fill ("green");
            q4.html("Q4. DO YOU LIKE OTHER PEOPLE BEING HAPPY?");
            q4.position(70,420);
            var bq4 = createRadio();     
            bq4.position(150,470);
            bq4.option('YES');    
            bq4.option('NO');

            var q5 = createElement('h2');
            fill ("green");
            q5.html("Q5. WILL YOU REMEMBER TO ALWAYS BE HAPPY?");
            q5.position(70,520);
            var bq5 = createRadio();     
            bq5.position(150,570);
            bq5.option('Yes');    
            bq5.option('No');

            var q6 = createElement('h2');
            fill ("green");
            q6.html("Q6. DID YOU ENJOY THIS QUIZ?");
            q6.position(70,620);
            var bq6= createRadio();     
            bq6.position(150,670);
            bq6.option('Yes');    
            bq6.option('No');

            this.button.mousePressed(function Submit(){
                var data = {
    
                   'Name' : tsaaa.value() ,
                    'Email': ttsa.value() ,
                    'Q1' : bq1.value() ,
                    'Q2' : bq2.value() ,
                    'Q3' : bq3.value() ,
                    'Q4' : bq4.value() ,
                    'Q5' : bq5.value() ,
                    'Q6' : bq6.value()

    
                }
                ref.push(data);
            });
    }

}