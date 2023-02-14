from urllib import response
from flask import Flask,request,make_response

app=Flask(__name__)

@app.route('/save-subscriptions',methods=['POST'])
def save_booking():
    fullName=request.form['fullName']
    date=request.form['date']
    hour=request.form['hour']
    phoneNumber=request.form['phoneNumber']
    print(fullName)
    with open('/Users/stelutavisan/Desktop/curs TFP/modulul 3/fit-studio/server/data.txt','a+') as f:
        f.write(fullName+' , '+date+' , '+hour+' , '+phoneNumber+'\n')
    response = make_response("success")
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

@app.route('/subscriptions', methods=["GET"])
def get_booking_items():
     
    with open('/Users/stelutavisan/Desktop/curs TFP/modulul 3/fit-studio/server/data.txt','r+') as f:
            lines = f.readlines()
    appointmentItems=[]
    for line in lines:
        line = line.split(",")
        
        data={
                "date": line[1],
                "hour": line[2],
                "fullName": line[0],
                "phone": line[3].strip()
            }  
        appointmentItems.append(data)
        
    response=make_response(
        { "appointmentItems": appointmentItems,
            "succes": True
		}
    )
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response



if __name__=="__main__":
    app.run(debug=True)