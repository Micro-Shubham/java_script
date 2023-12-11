class railway {
    submit() {
        alert(this.name + ": your forom is being submitted with train no."+this.traino) ;

    }
    cancel() {
        alert(this.name + ": your form is being cancelled with train no."+this.traino);
    }
    fill(name,traino) {
        this.name= name;
        this.train=traino;
    }
}
//create form for harkirat 
let harkiform =new railway();
//fill the form for harkirat
harkiform.fill("harkirat singh",3464);
//create form for rohan
let rohanform =new railway();
//fill the form for rohan 
rohanform.fill("rohan ",6754);
//later rohan cancel his train 
rohanform.cancel();
//harkirat submited his form 
harkiform.submit();