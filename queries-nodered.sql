#based on sensors
select * from sensor_readings where sensor_id='1';

#based on sensor type
select * from sensor_readings where sensor_type='1';

#sensors and location
select sensor_id,location from sensors ;

#list of sensor types
select * from sensor_attributes;

#last value
select * from sensor_readings where sensor_type='1' and sensor_type='2' and sensor_type='3' and sensor_type='4' and sensor_type='5' order by id desc limit 5;

select  s.time, s.sensor_id, s.sensor_tyoe, s.value, s.pH, s.co2 from (select * from sensor_readings order by time desc) as s group by s.time;

select * from average_data order by time desc limit 1;

select a.sensor_id, b.name from  sensors a, sensor_attributes b;



 SELECT *, FROM_UNIXTIME(UNIX_TIMESTAMP(time)- UNIX_TIMESTAMP(time)%(60*60)) as time from readings group by time;
 
 
 select product_sales.* from product_sales,
           (select product,max(order_date) as order_date
                from product_sales
                group by product) max_sales
             where product_sales.product=max_sales.product
             and product_sales.order_date=max_sales.order_date;
 
 #latest data from sensor_readings table
 select sensor_readings.* from sensor_readings,
           (select sensor_id,max(time) as time
                from sensor_readings
                group by sensor_id) latest
             where sensor_readings.sensor_id=latest.sensor_id
             and sensor_readings.time=latest.time;

SELECT * FROM sensor_readings WHERE date(time) BETWEEN '2022-01-27' AND '2015-01-28';

SELECT *
FROM sensor_readings
WHERE time BETWEEN '2022-01-28 12:00:00' AND '2022-01-29 23:30:00';

SELECT *
FROM sensor_readings
WHERE time > date_sub(now(), interval 1 week);



#from-date to- to-date --descending order
select * from sensor_readings 
where time between '2022-01-28 00:00:00' and '2022-01-29 23:59:00' 
order by time desc;

select * from sensor_readings 
where time between '2022-01-28 01:00:00' and '2022-01-29 23:59:00' 
order by time asc;


#comparing sensor type from tables sensor readings and sensor attributes
select a.time, a.sensor_id, a.value, a.sensor_type, b.name, b.sensor_type from sensor_readings a, sensor_attributes b where time > NOW()- interval 72 HOUR and a.sensor_type = b.sensor_type;