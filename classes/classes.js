class Jet {
    constructor(
        name,
        speed,
        topspeed,
        year,
        weight,

    ){
    this.name = name;
    this.speed = speed;
    this.topspeed = topspeed;
    this.year = year;
    this.weight = weight;
    }
    fly(speed){
        this.speed=speed;
        console.log("My "+this.name+"Is flying at a speed of "+this.speed)

    }
    brake(){

    }
  }
    
  const jet1 = new Jet("mig 21",1000,2230, "gasoline",1972,9500);
  const jet2 = new Jet("Tupolev Tu-95 bomber",710,1030, "gasoline",2013,94.400 );
  jet1.fly(1000);
  jet2.fly(710);
  jet1.brake();
  jet2.brake();
  

