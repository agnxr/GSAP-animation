const tl = new TimelineMax({ delay: 2});

const heart = document.querySelectorAll(".heart");
const body = document.getElementsByTagName('body');

const fill = document.querySelectorAll(".st2");

const serduszko = document.getElementById('serduszko');
const st = document.getElementById('st');

tl.set(heart, {opacity: 1});
tl.set(body, {backgroundColor: '#FFEEE3'});
tl.set(st,{backgroundColor: 'red'});
tl.set(fill,{opacity: 0});

tl.from(heart, 1, {y: -800})
    .to(body, 4, {backgroundColor: '#ed6486'})
    .set(fill, {opacity: 1})
    .from(fill, 1.5, {scaleY: 0, transformOrigin: '90% 100%'})
    .to(st, 3, {backgroundColor: 'blue'});