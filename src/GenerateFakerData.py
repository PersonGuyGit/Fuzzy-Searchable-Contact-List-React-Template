from faker import Faker
import pandas as pd

#Create Faker Instance
faker = Faker('en_US')

id = 0

#Init DataFrame
df = pd.DataFrame(columns = ['ID', 'lastName', 'firstName', 'location', 'title', 'number'])

# Create Faker data, and append it to df
for i in range(50):
    id += 1
    firstName = faker.first_name()
    lastName = faker.last_name()
    phone = faker.phone_number()
    location = faker.address()
    title = faker.job()
    list = [id, firstName, lastName, location, title, phone]
    row = pd.Series(list, index=df.columns)
    df = df.append(row, ignore_index=True)

with open('data.json', 'w') as f:
       f.write(df.to_json(orient='records'))