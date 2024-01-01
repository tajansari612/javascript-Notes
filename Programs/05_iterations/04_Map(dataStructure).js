let mp = new Map();

mp.set('IN',"India");
mp.set('US',"United States Of America");
mp.set('FR',"France");
mp.set('IN',"India");
mp.set('IN',"India");
mp.set('IN',"India");
mp.set('IN',"India");

console.log(mp);
console.log(mp.get('IN'));
console.log(mp.get('FR'));

for (const [key , value] of mp) {
    console.log(`${key} ===> ${value}`);
}