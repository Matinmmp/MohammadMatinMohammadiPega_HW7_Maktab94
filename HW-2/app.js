const stepCounter={
    step : 0,
    incStep(){
        this.step++;
    },
    decStep(){
        this.step--;
    },
    reset(){
        this.step = 0;
    },
    read(){
        console.log(this.step);
    }
}

stepCounter.incStep();
stepCounter.incStep();
stepCounter.incStep();
stepCounter.reset();
stepCounter.incStep();
stepCounter.incStep();
stepCounter.incStep();
stepCounter.read();