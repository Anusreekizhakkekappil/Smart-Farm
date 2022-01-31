use smartfarmdata;

#sensors
select * from sensors;
update sensors set location = '37.8120° S, 144.9626° E' where sensor_id='3';


#sensor attributes table
select * from sensor_attributes;

#sensor readings 
select * from sensor_readings;

desc sensor_readings;

drop view hour_group;

#rows as columns
select * from readings;

#final output view
create view readings as(
select
id,
time,
sensor_id,
case when sensor_type = "1" then value end as temperature,
case when sensor_type = "2" then value end as VWC,
case when sensor_type = "3" then value end as soil_electricity,
case when sensor_type = "4" then value end as pH,
case when sensor_type = "5" then value end as co2
from sensor_readings
);

drop view readings;

#group by hour
 SELECT id,temperature,VWC,soil_electricity,pH,co2, FROM_UNIXTIME(UNIX_TIMESTAMP(time)- UNIX_TIMESTAMP(time)%(60*60)) as time from readings order by time;

create view hour_by as 
 SELECT id,temperature,VWC,soil_electricity,pH,co2, FROM_UNIXTIME(UNIX_TIMESTAMP(time)- UNIX_TIMESTAMP(time)%(60*60)) as time from readings order by time;

select * from hour_by;


select * from readings;



 #average of multiple values
select time, avg(temperature) as temperature, avg(VWC) as VWC,avg(soil_electricity) as soil_electricity,avg(pH) as pH,avg(co2) as co2 from hour_by group by time;

create view average_data as
select id,time, sensor_id, avg(temperature) as temperature, avg(VWC) as VWC,avg(soil_electricity) as soil_electricity,avg(pH) as pH,avg(co2) as co2 from hour_by group by time;

select * from average_data;

drop view average_data;
#retrieving readings "NOW"
select * from sensor_readings 
       where date(time)=date(now()) 
        and hour(time)=hour(now());
        
#latest 5 readings
select *from sensor_readings ORDER BY time DESC LIMIT 5;

#readings in the last 24 hours
select * from sensor_readings
   where time > NOW()- interval 24 HOUR AND sensor_type = '1';
   
   select * from sensor_readings
   where time > NOW()- interval 24 HOUR AND sensor_type = '2';
   
   select * from sensor_readings
   where time > NOW()- interval 24 HOUR AND sensor_type = '3';
   
   
   select * from sensor_readings
   where time > NOW()- interval 24 HOUR AND sensor_type = '4';
   
   select * from sensor_readings
   where time > NOW()- interval 24 HOUR AND sensor_type = '5';
   
   

#readings from last 2 weeks
select * from sensor_readings
   where time > NOW()- interval 14 day;
