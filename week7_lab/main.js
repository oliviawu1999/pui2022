function Cat(name,age){
    this.name=name;
    this.age=age;
    this.image_alt="Cat photo"
    this.image="np_British Semi-longhair gray cat_0J6Aw0_free.jpg"
}

function Deer(name,age){
    this.name=name;
    this.age=age;
    this.image_alt="Deer photo"
    this.image="np_Brown deer on brown field_43Jdx5_free.jpg"
}

function Horse(name,age){
    this.name=name;
    this.age=age;
    this.image_alt="Horse photo"
    this.image="np_Wild horses on steppe_0ydgOb_free.jpg"
}

let animal=[];
animal[0]=new Cat();
animal[1]=new Deer();
animal[2]=new Horse();
let names=["Sausa","Rayne","Abby"];

function generateRandomIndex(maxIndex){
    return Math.floor(Math.random()*maxIndex);
}

function generateRandomName(){
    let randomIndex=generateRandomIndex(3);
    return names[randomIndex];
}

function generateRandomAge(){
    let age=generateRandomIndex(10)
    return age;
}

function generateRandomAnimal(){
    let randomIdx=generateRandomIndex(names.length);
    let randomAnimal=animal[randomIdx];
    if(randomAnimal instanceof Cat){
        return new Cat(generateRandomName(),generateRandomAge());
    }
    if(randomAnimal instanceof Deer){
        return new Deer(generateRandomName(),generateRandomAge());
    }
    if(randomAnimal instanceof Horse){
        return new Horse(generateRandomName(),generateRandomAge());
    }
}

function onload(){
    let animal=generateRandomAnimal();
    document.getElementById("text").textContent=animal.name+" "+animal.age+" years old";
    let img1=document.getElementById("img1");
    img1.setAttribute('src',animal.image);
    img1.setAttribute('alt',animal.alt);
}

