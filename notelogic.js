
class Track {
    constructor(id) {
        this.id = id;
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d"); 
        this.vel = 6.7;
        this.hit = this.y + 5; // property of note
        this.running = false

        this.notes = [];

        this.sendNote = this.sendNote.bind(this);
        this.judgeSpawn = this.judgeSpawn.bind(this);
    }

    judgeSpawn() {
        this.ctx.fillStyle = "rgb 000/10%";
        this.ctx.fillRect(0, 130, 550, 500)
    }

    spawnNote() {
        this.notes.push(-5);
    }

    sendNote() {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)

        //respawn judgement line
        this.ctx.fillStyle = "rgb 000/10%";
        this.ctx.fillRect(0, 130, 550, 500)

        this.ctx.fillStyle = "rgb 000/60%";
        

        for (let i = 0; i < this.notes.length; i++) {
            this.notes[i] += this.vel;
            this.ctx.fillRect(0, this.notes[i], 550, 5);
        }

        this.notes = this.notes.filter(y => y <= 150);

        requestAnimationFrame(this.sendNote);
    }

    playback() {
        if (this.running) return;
        this.running = true;
        requestAnimationFrame(this.judgeSpawn);
        requestAnimationFrame(this.sendNote);
    }

}

const t1 = new Track("can1");
t1.playback();
const t2 = new Track("can2");
t2.playback();
const t3 = new Track("can3");
t3.playback();
const t4 = new Track("can4");
t4.playback();


document.addEventListener("keydown", (event) => {
    if(event.key === 'a' || event.key === "A") {
        t1.spawnNote();
    }

    if(event.key === 's' || event.key === "S") {
        t2.spawnNote();
    }

    if(event.key === 'k' || event.key === "K") {
        t3.spawnNote();
    }

    if(event.key === 'l' || event.key === "L") {
        t4.spawnNote();
    }
});

//I still don't like this but ueuehehghhhh