DROP DATABASE IF EXISTS webservice;
CREATE DATABASE IF NOT EXISTS webservice DEFAULT CHARACTER SET utf8;
USE webservice; 


CREATE TABLE IF NOT EXISTS tag (
  id INT NOT NULL AUTO_INCREMENT,
  tagname VARCHAR(65) NOT NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS picture (
  id INT NOT NULL AUTO_INCREMENT,
  artist VARCHAR(65) NOT NULL,
  path VARCHAR(255) NOT NULL,
  originalname VARCHAR(65),
  name VARCHAR(65),
  usercomment VARCHAR(255),

  yresolution INT,
  xresolution INT,
  imagewidth INT,
  model VARCHAR(65),
  imageheight INT,
  make VARCHAR(65),
  software VARCHAR(65),
  ycbcrpositioning INT,
  imagedescription VARCHAR(65),
  orientation VARCHAR(65),
  modifydate DATETIME,
  exifversion VARCHAR(65),
  colorspace INT,
  exifimagewidth INT,
  iso INT,
  offsettimedigitized VARCHAR(65),
  exifimageheight INT,
  datetimeoriginal DATETIME,
  whitebalance VARCHAR(65),
  createdate DATETIME,
  focallength DOUBLE,
  exposuretime DOUBLE,
  offsettime VARCHAR(65),
  offsettimeoriginal VARCHAR(65),
  flash VARCHAR(65),
  lightsource VARCHAR(65),
  fnumber DOUBLE,

  PRIMARY KEY (id))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS picture_tag (
  pictureId INT NOT NULL,
  tagId VARCHAR(45) NOT NULL,
  PRIMARY KEY (pictureId, tagId))
ENGINE = InnoDB;



