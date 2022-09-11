
const hasla=['WIOSNA','TELEWIZOR','PODUSZKA','HERBATA','JABLKO'];

var dlugosc_tablicy=hasla.length;
var losowy_indeks=Math.floor(Math.random()*(dlugosc_tablicy));
var ilosc_liter=hasla[losowy_indeks].length;
document.write(hasla[losowy_indeks]);

for(var i=0;i<ilosc_liter;i++){
    document.write("<input type='button' class='przycisk'>");
}

var a=document.getElementById('a');
var b=document.getElementById('b');
var c=document.getElementById('c');
var d=document.getElementById('d');
var e=document.getElementById('e');
var f=document.getElementById('f');
var g=document.getElementById('g');
var h=document.getElementById('h');
var i=document.getElementById('i');
var j=document.getElementById('j');
var k=document.getElementById('k');
var l=document.getElementById('l');
var m=document.getElementById('m');
var n=document.getElementById('n');
var o=document.getElementById('o');
var p=document.getElementById('p');
var r=document.getElementById('r');
var s=document.getElementById('s');
var t=document.getElementById('t');
var u=document.getElementById('u');
var w=document.getElementById('w');
var x=document.getElementById('x');
var y=document.getElementById('y');
var przycisk=document.getElementsByClassName("przycisk");


var suma_klikniec=0;
o.addEventListener("click",function (){
    suma_klikniec++;
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
    alert(suma_klikniec);
});

a.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

b.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

c.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

d.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

e.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

f.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

g.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

h.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

i.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

j.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

k.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

l.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

m.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

n.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

p.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

r.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

s.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

t.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

u.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

w.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

x.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

y.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});

z.addEventListener("click",function (){
    for(var i=0;i<ilosc_liter;i++){
        if(this.value==hasla[losowy_indeks][i]){
            przycisk[i].value=this.value;
        }
    }
});



