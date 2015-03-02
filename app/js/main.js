/*global inViewport */
var contactBox = document.getElementById('contactContainer');
var skillsBox = document.getElementById('skillsContainer');
inViewport(contactBox, function(){
  contactBox.className+=' animate';
});
inViewport(skillsBox,{offset: -200}, function(){
  console.log('j');
  skillsBox.className+=' animate';
});
