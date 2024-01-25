// Written by Amber Crowe 

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
}

function draw() {
  // Example 1
  noStroke(); 
  fill(124,252,100);
  rect(50,50,200,100);

  stroke(0);
  strokeWeight(1);
  fill(255); 
  ellipse(100,100,80,80);

  stroke(0);
  fill(255);
  rect(160,60,80,80);

  // Example 2
  fill(255);
  noStroke(); 
  rect(50,200,200,200);

  noStroke();
  fill(6,70,100, 0.6); // salmon
  ellipse(150,275,100,100);

  noStroke();
  fill(139,70,100, 0.6); // green
  ellipse(185,330,100,100);
  
  noStroke();
  fill(246,70,100, 0.6); // purple
  ellipse(115,330,100,100);

  // Example 3
  fill(0);
  rect(300,50,200,100);

  fill(57,80,200);
  arc(350,100,80,80,425,-425);

  fill(6,84,88);
  rect(410,95,80,45);
  ellipse(450,100,80,80);

  fill(232,97,77);
  stroke(255);
  strokeWeight(4);
  ellipse(430,100,20,20);
  ellipse(470,100,20,20);

  // Example 4
  noStroke(); 
  fill(239,80,52);
  rect(300,198,200,200);

  stroke(255);
  strokeWeight(3);
  fill(144,98,48);
  ellipse(400,300,110,110);

  fill(1,92,91);
  strokeWeight(3);
  beginShape(); 
  vertex(400,240); //Vertex 1
  vertex(385,280); //Vertex 2
  vertex(345,280); //Vertex 3
  vertex(375,305); //Vertex 4
  vertex(365,345); //Vertex 5
  vertex(400,320); //Vertex 6
  vertex(435,345); //Vertex 7
  vertex(425,305); //Vertex 8 
  vertex(455,280); //Vertex 9
  vertex(415,280); //Vertex 10
  endShape(CLOSE); 
}



