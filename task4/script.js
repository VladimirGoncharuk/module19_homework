// 4task 
function Appliance(type){
this.supply = "От сети",
this.voltage = 220 ,
this.frequency ="50 Гц" ,  
this.type = type    
}

Appliance.prototype.connectSocket=function(power){
    if(power){
        console.log(`Прибор подключен! Мощность потребления ${power} Вт`)
    }
    else{console.log("Прибор выключен!")
    }  
}

function Lighting (name,brightness){
this.name = name,
this.brightness = brightness
}

Lighting.prototype= new Appliance("Осветительный");

Lighting.prototype.brightRoom =function(numberElement){
    console.log( `Освещенность помещения ${numberElement * this.brightness} Лм `)
}


function Telecommunication (name,connectWeb){
this.name = name,
this.connectWeb = connectWeb,
this.purpose = "Культурно-досуговое" 
}

Telecommunication.prototype= new Appliance("Телекоммуникационный")

Telecommunication.prototype.payData=function(data){
    console.log(`оплата за связь ${data} числа каждого месяца`)
}

function Heating (name,purpose){
this.name=name,
this.purpose= purpose
}

Heating.prototype=new Appliance("Нагревательный")

Heating.prototype.consumption=function(time){
    console.log(`Потребление энергии нагревательным прибором ${this.voltage*time} Вт/ч `)    
}

const bulb = new Lighting("Лампа накаливания",7000);
bulb.kind="Уличное";
bulb.brightRoom(5);

const сomputer = new Telecommunication("ЭВМ","Волоконно-оптическое");
сomputer.restriction = "12+";
сomputer.payData(12);

const iron =new Heating("Утюг","Разглаживание");
iron.consumption(13);


console.log(bulb);
bulb.connectSocket(12)
console.log(сomputer);
сomputer.connectSocket(20);
console.log(iron);
iron.connectSocket(0)   