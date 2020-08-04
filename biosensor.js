// This class will generate a living simulator
class Biosensor{
    constructor(name){
        //We ant to initialize the owner for the heartbeat and keep track of the heartrate
        this.owner=name;
        this.heartRate=0;
        this.live();
    }

     generateRandomBetween(min, max) {
        return parseInt(Math.random() * (max - min + 1) + min);
      }

    generateHeartBeat(){
        let HeartBeat = this.generateRandomBetween(60,70);
        this.heartRate=HeartBeat;
        console.log('[Owner]:' +this.owner+'------[HR]:'+this.heartRate);
    }
    live(){
        setInterval(()=>{this.generateHeartBeat()},1000);
    }
}

let human1=new Biosensor('Raghu');
let human2=new Biosensor('Venkat');