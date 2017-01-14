<?php
//当前时间的毫秒值 time()

$time = time();
//echo $time;
$date = date('Y-m-d H:i:s',$time);  //当前时间
echo $date;
var_dump($date);