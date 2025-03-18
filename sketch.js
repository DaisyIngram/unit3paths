
let path1
let path2
let path3
let path4
let path5
let path6
let timer = 0
let increment = 1

function preload(){
  path1 = loadImage("paths1.png") 
  path2 = loadImage("paths2.png") 
  path3 = loadImage("paths3.png") 
  path4 = loadImage("paths4.png") 
  path5 = loadImage("paths5.png") 
  path6 = loadImage("paths6.png") 

}
  

function setup() {
  createCanvas(windowWidth, windowHeight);

}


function draw() {
  background(220);

  timer = timer + increment

  image(path1, 0,0, path1.width, path1.height)

  

if (timer >= 200){
    image(path2, 0, 0, path2.width, path2.height)}

  if (timer >= 400){
    image(path3, 0, 0, path3.width, path3.height)}

  if (timer >= 600){
    image(path4, 0, 0, path4.width, path4.height)}
      
  if (timer >= 800){
   image(path5, 0, 0, path5.width, path5.height)}

  if (timer >= 1000){
   image(path6, 0, 0, path6.width, path6.height)}


   if (timer === 1200){
    timer = 0
   }
}
    
  



