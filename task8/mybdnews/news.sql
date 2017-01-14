/*
SQLyog Ultimate v8.32 
MySQL - 5.5.40 : Database - bdnews
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`bdnews` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `bdnews`;

/*Table structure for table `news` */

DROP TABLE IF EXISTS `news`;

CREATE TABLE `news` (
  `news_id` int(11) NOT NULL AUTO_INCREMENT,
  `news_title` varchar(100) NOT NULL,
  `news_content` text NOT NULL,
  `news_mark` varchar(32) NOT NULL,
  `post_time` varchar(19) NOT NULL,
  `news_classification` varchar(32) NOT NULL,
  `news_Thumbnail` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`news_id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

/*Data for the table `news` */

insert  into `news`(`news_id`,`news_title`,`news_content`,`news_mark`,`post_time`,`news_classification`,`news_Thumbnail`) values (15,'asdjkajksdjk','啊圣诞节啊司机打开空间阿萨德金卡姐啊宽松的','热点','2016-12-26 20:04:16','精选','../../uploads/1.jpeg'),(16,'sDFHJSDFHHBSDFF','asdjaksdjfjksfdj','redian','2016-12-26 20:32:17','精选',''),(17,'阿斯顿和环境阿斯蒂芬紧急送到附近','是DFJKJK看K肯德基卡萨帝景客房','热进口菜籽进口C','2016-12-26 20:35:55','精选','');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
