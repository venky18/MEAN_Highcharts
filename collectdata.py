from pymongo import MongoClient
import serial
from datetime import datetime
from pprint import pprint
import time
import random
# ser = serial.Serial('COM3', 57600)
client = MongoClient()
client = MongoClient('localhost', 27017)
db = client.sensordata
while True:
	try:
		d = random.random()
		print(d)
		result = db.tdr_data.insert_one({
			"date": int(time.time()*1000),
			# "value": int(ser.readline().decode('UTF-8').strip().split("=")[1][1:]),
			"value": d
		})
	except Exception as e:
		raise e
	time.sleep(3)
# cursor = collection.find({})
# collection=db['tdr_data']
# cursor = collection.find({})
# for document in cursor: 
#     pprint(document)