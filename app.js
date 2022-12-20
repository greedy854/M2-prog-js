class App{
    runApplication() {


    let button = document.getElementById("rerollButton")
    button.addEventListener('click' , ()=>{
        console.log("hello world");
        console.log("hello world!");
        let stat1 = this.cijfertellen();
        let headerEL1 = document.getElementById("s1");
        headerEL1.innerHTML = stat1;

        let stat2 = this.cijfertellen();
        let headerEL2 = document.getElementById("s2");
        headerEL2.innerHTML = stat2;
        let stat3 = this.cijfertellen();
        
        let stat4 = this.cijfertellen();
       
        let stat5 = this.cijfertellen();
       
        let stat6 = this.cijfertellen();

    })



    console.log("hello world!");
    let stat1 = this.cijfertellen();
    let headerEL1 = document.getElementById("s1");
    headerEL1.innerHTML = stat1;
    let stat2 = this.cijfertellen();
    
    let stat3 = this.cijfertellen();
    
    let stat4 = this.cijfertellen();
   
    let stat5 = this.cijfertellen();
   
    let stat6 = this.cijfertellen();
   

    let d1 = this.rollDice();
    
    }
    rollDice(){
        return Math.floor(Math.random() * 6+1);
    }

    cijfertellen(){
        let d1 = this.rollDice();
        let d2 = this.rollDice();
        let d3 = this.rollDice();
        let d4 = this.rollDice();
        let diceArray = [d1, d2, d3, d4];
        diceArray.sort();
        let som = diceArray[1] + diceArray[2] + diceArray[3]
        return som;
       
    }
}

let app = new App();
app.runApplication();

       
    
        