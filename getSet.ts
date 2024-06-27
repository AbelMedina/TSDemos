class Speaker {
  private message: string;
  constructor(private name: string) {}
  get Message() {
    if (!this.message.includes(this.name)) {
      throw Error("message is missung speaker's name");
    }
    return this.Message;
  }

  set Message(val: string) {
    let tmpMessage = val;
    if (!val.includes(this.name)) {
      tmpMessage = this.name + " " + val;
    }
    this.message = tmpMessage;
  }
}

const speaker = new Speaker("john");
speaker.Message = "Hello";
console.log(speaker.Message);
