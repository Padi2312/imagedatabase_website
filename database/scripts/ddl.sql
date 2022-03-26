DROP DATABASE IF EXISTS webservice;
CREATE DATABASE IF NOT EXISTS webservice DEFAULT CHARACTER SET utf8;
USE webservice; 


CREATE TABLE IF NOT EXISTS tag (
  id INT NOT NULL AUTO_INCREMENT,
  tagname VARCHAR(65) NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS picture (
  id INT NOT NULL AUTO_INCREMENT,
  artist VARCHAR(65) NOT NULL,
  usercomment VARCHAR(255) NOT NULL,

  yresolution INT NOT NULL,
  xresolution INT NOT NULL,
  imagewidth INT NOT NULL,
  model VARCHAR(65) NOT NULL,
  imageheight INT NOT NULL,
  make VARCHAR(65) NOT NULL,
  software VARCHAR(65) NOT NULL,
  ycbcrpositioning INT NOT NULL,
  imagedescription VARCHAR(65) NOT NULL,
  orientation VARCHAR(65) NOT NULL,
  modifydate DATETIME NOT NULL,
  exifversion VARCHAR(65) NOT NULL,
  colorspace INT NOT NULL,
  exifimagewidth INT NOT NULL,
  iso INT NOT NULL,
  offsettimedigitized VARCHAR(65) NOT NULL,
  exifimageheight INT NOT NULL,
  datetimeoriginal DATETIME NOT NULL,
  whitebalance VARCHAR(65) NOT NULL,
  createdate DATETIME NOT NULL,
  focallength DOUBLE NOT NULL,
  exposuretime DOUBLE NOT NULL,
  offsettime VARCHAR(65) NOT NULL,
  offsettimeoriginal VARCHAR(65) NOT NULL,
  flash VARCHAR(65) NOT NULL,
  lightsource VARCHAR(65) NOT NULL,
  fnumber DOUBLE NOT NULL,

  PRIMARY KEY (id))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS picture_tag (
  pictureId INT NOT NULL,
  tagId VARCHAR(45) NULL,
  PRIMARY KEY (pictureId, tagId))
ENGINE = InnoDB;



