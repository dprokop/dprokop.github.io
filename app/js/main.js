/*global inViewport */
/*jshint multistr: true */

(function(){
  var contactBox = document.getElementById('contactContainer');
  var skillsBox = document.getElementById('skillsContainer');
  
  inViewport(contactBox, function(){
    contactBox.className+=' animate';
  });
  
  inViewport(skillsBox,{offset: -200}, function(){
    skillsBox.className+=' animate';
  });

  console.log('\
 ###################################################### \n \
##                                                    ##\n \
##                                                    ##\n \
##   Man, and there you go! If you are already here,  ##\n \
##  then you definitely should get in touch with me!  ##\n \
##                                                    ##\n \
## -------------------------------------------------- ##\n \
##     !!!  I can be your rookie of the year.  !!!    ##\n \
## -------------------------------------------------- ##\n \
## ***************** +48 697 096 307 **************** ##\n \
##         prokopd@gmail.com   |   @prokopd           ##\n \
##                                                    ##\n \
##                                                    ##\n \
 ###################################################### ');
})();