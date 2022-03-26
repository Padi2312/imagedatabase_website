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

  YResolution INT,
  XResolution INT,
  ImageWidth INT,
  Model VARCHAR(65),
  ImageHeight INT,
  Make VARCHAR(65),
  Software VARCHAR(65),
  YCbCrPositioning INT,
  ImageDescription VARCHAR(65),
  Orientation VARCHAR(65),
  ModifyDate DATETIME,
  ExifVersion VARCHAR(65),
  ColorSpace INT,
  ExifImageWidth INT,
  ISO INT,
  OffsetTimeDigitized VARCHAR(65),
  ExifImageHeight INT,
  DateTimeOriginal DATETIME,
  WhiteBalance VARCHAR(65),
  CreateDate DATETIME,
  FocalLength DOUBLE,
  ExposureTime DOUBLE,
  OffsetTime VARCHAR(65),
  OffsetTimeOriginal VARCHAR(65),
  Flash VARCHAR(65),
  LightSource VARCHAR(65),
  FNumber DOUBLE,

  PRIMARY KEY (id))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS picture_tag (
  pictureId INT NOT NULL,
  tagId VARCHAR(45) NOT NULL,
  PRIMARY KEY (pictureId, tagId))
ENGINE = InnoDB;



