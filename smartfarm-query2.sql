create view hour_group as(
select
time,
case when sensor_type = "1" then value end as temperature,
case when sensor_type = "2" then value end as VWC,
case when sensor_type = "3" then value end as soil_electricity,
case when sensor_type = "4" then value end as pH,
case when sensor_type = "5" then value end as co2
from readings
);

ALTER TABLE sensor_readings modify column value decimal(6,2);

select * from sensor_readings;


alter table sensor_readings drop column id;

desc sensor_readings;

Alter table sensor_readings rename column entry to id;


delete from sensor_readings where id ='20';


select * from sensor_readings;

