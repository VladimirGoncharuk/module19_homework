//5task
class Appliance{
    constructor(type){
    this.supply = "От сети";
    this.voltage = 220 ;
    this.frequency ="50 Гц" ; 
    this.type = type;
    }
    connectSocket(power){
        if(power){
            console.log(`Прибор подключен! Мощность потребления ${power} Вт`)
        }
        else{console.log("Прибор выключен!")
        }  
    }
    }
     
    class Lighting extends Appliance{
    constructor(name,brightness,type,numberElement){
    super(type);
    this.name = name;
    this.brightness = brightness;
    this.kind="Уличное";
    this.numberElement=numberElement;
    }
    brightRoom (){
        console.log( `Освещенность помещения ${this.numberElement * this.brightness} Лм `)
        }

    }
     
    class Telecommunication extends Appliance{
    constructor (name,connectWeb,type){
    super(type);
    this.name = name;
    this.connectWeb = connectWeb;
    this.purpose = "Культурно-досуговое";
    this.restriction = "12+";
    }
    payData(data){
        console.log(`оплата за связь ${data} числа каждого месяца`);
        }
    };
     
    class Heating extends Appliance{
    constructor(name,purpose,type){
    super(type);
    this.name=name,
    this.purpose= purpose
    }
    consumption(time){
        console.log(`Потребление энергии нагревательным прибором ${this.voltage*time} Вт/ч `)    
        }
    }
       
    const bulb = new Lighting("Лампа накаливания",7000,"Осветительный",5);
    
    bulb.brightRoom(5);
    
    const сomputer = new Telecommunication("ЭВМ","Волоконно-оптическое","Телекоммуникационный");
    
    сomputer.payData(12);
    
    const iron =new Heating("Утюг","Разглаживание","Нагревательный");
    iron.consumption(13);
    
    
    console.log(bulb);
    bulb.connectSocket(12)
    console.log(сomputer);
    сomputer.connectSocket(20)
    console.log(iron);
    iron.connectSocket(0)   