# SpiceTrack API
## API URL
[SpiceTrack API]
# **http://localhost:8080/**

## How to run this API on your local machine

If you want to run this API Server on your local machine, you need to do this steps:

- First, clone this repository.  git clone https://github.com/SpiceTrack/backend-spicetrack.git
- Second, open terminal and go to this project's root directory.
- Third, type npm ci in your terminal and hit enter button.
- Fourth, start xampp.
- fifth, create database name ulikbatik-dev.
- sixth, type npx prisma generate in your terminal and hit enter button.
- seventh, type npx prisma migrate dev in your terminal and hit enter button.
- eighth, type npm run start-dev in your terminal and hit enter button.
- Finally, the server will run on your http://localhost:8080

## API Endpoints
## Auth Endpoints
## Register
```bash
POST /auth/register
```
# Register account for user
| Parameter         | Type    | Description |
|-------------------|---------|-------------|
| `username`        | varchar | Required.   |
| `password`        | varchar | Required.   |
## Response
```bash
{
    "message": "User registered successfully!"
}
```
## Login
```bash
POST /auth/login
```
# Login account for user
| Parameter         | Type    | Description |
|-------------------|---------|-------------|
| `username`        | varchar | Required.   |
| `password`        | varchar | Required.   |
## Response
```bash
{
    "message": "Hello, doni77. Welcome to Spice Track!."
}
```
## User Endpoints
## Edit Profile
```bash
POST /user/edit-profile
```
# Edit Profile account for user
| Parameter         | Type    | Description |
|-------------------|---------|-------------|
| `Id`              | int     | Required.   |
| `newUsername`     | varchar | Required.   |
| `newPassword`     | varchar | Required.   |
| `newProfileData`  | varchar | Required.   |
## Response
```bash
    message: "Profile updated successfully!"
```
## User Logout
```bash
POST /user/logout
```
## Response
```bash
    message: "You have been logged out successfully!"
```
## Herb Endpoints
## Get All Herbs
```bash
GET /herbs
```
## Response
```bash
[
    {
        "id_herbs": 1,
        "title": "Adas",
        "subtitle": "Foeniculum vulgare",
        "content": "Adas adalah tanaman yang sering digunakan sebagai bumbu masakan dan obat herbal. Tanaman ini berasal dari wilayah Mediterania dan telah digunakan sejak zaman kuno. Adas memiliki rasa manis yang khas dan sering digunakan dalam berbagai masakan, termasuk sup, salad, dan hidangan daging. Selain itu, adas juga dikenal memiliki berbagai manfaat kesehatan, seperti membantu pencernaan dan mengurangi peradangan.",
        "origin": "Mediterania",
        "flavor": "manis",
        "tags": "[\"herbal\", \"obat\"]",
        "image_url": "https://drive.google.com/file/d/1uuCKzuEc3W9zattrQbGtJ0gulIs-OtGj/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T12:08:41.000Z"
    },
    {
        "id_herbs": 2,
        "title": "Andaliman",
        "subtitle": "Zanthoxylum acanthopodium",
        "content": "Andaliman adalah rempah yang sering digunakan dalam masakan Batak. Rempah ini memiliki rasa pedas yang unik dan memberikan aroma khas pada masakan. Andaliman tumbuh di daerah pegunungan Sumatra dan sering digunakan dalam hidangan seperti arsik dan saksang. Selain sebagai bumbu masakan, andaliman juga memiliki manfaat kesehatan, seperti meningkatkan sirkulasi darah dan meredakan nyeri.",
        "origin": "Sumatra",
        "flavor": "pedas",
        "tags": "[\"herbal\", \"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1afCrl7e8p6QRpSvIR6HU2poxxEAphtHQ/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T15:57:32.000Z"
    },
    {
        "id_herbs": 3,
        "title": "Asam Jawa",
        "subtitle": "Tamarindus indica",
        "content": "Asam Jawa adalah buah yang sering digunakan sebagai bumbu masakan dan obat tradisional. Buah ini memiliki rasa asam yang khas dan sering digunakan dalam berbagai hidangan, seperti sayur asam, sambal, dan minuman tradisional. Asam Jawa berasal dari Afrika dan telah menyebar ke berbagai belahan dunia. Selain sebagai bumbu masakan, asam Jawa juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan sistem kekebalan tubuh dan membantu pencernaan.",
        "origin": "Afrika",
        "flavor": "asam",
        "tags": "[\"herbal\", \"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1ImdoFUTatsonrCPTv3CeyPwEhlIJCncS/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T15:58:57.000Z"
    },
    {
        "id_herbs": 4,
        "title": "Bawang Bombai",
        "subtitle": "Allium cepa",
        "content": "Bawang Bombai adalah jenis bawang yang sering digunakan dalam masakan. Bawang ini memiliki ukuran yang lebih besar dibandingkan bawang merah dan memiliki rasa yang lebih manis. Bawang Bombai sering digunakan dalam berbagai hidangan, seperti tumisan, sup, dan salad. Selain sebagai bumbu masakan, bawang Bombai juga dikenal memiliki berbagai manfaat kesehatan, seperti menurunkan tekanan darah dan meningkatkan kesehatan jantung.",
        "origin": "Asia Tengah",
        "flavor": "manis",
        "tags": "[\"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1NGLOeoMGr9VZzxYFIL36NVd4cf2WC43j/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:00:02.000Z"
    },
    {
        "id_herbs": 5,
        "title": "Bawang Merah",
        "subtitle": "Allium cepa var. aggregatum",
        "content": "Bawang Merah adalah jenis bawang yang sering digunakan dalam masakan. Bawang ini memiliki ukuran yang lebih kecil dibandingkan bawang Bombai dan memiliki rasa yang lebih pedas. Bawang Merah sering digunakan dalam berbagai hidangan, seperti sambal, tumisan, dan acar. Selain sebagai bumbu masakan, bawang Merah juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan sistem kekebalan tubuh dan mengurangi risiko kanker.",
        "origin": "Asia Tengah",
        "flavor": "pedas",
        "tags": "[\"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1fLD2ubOR2NhtqQLeClRNsQ6ajO2R4Sb5/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:00:48.000Z"
    },
    {
        "id_herbs": 6,
        "title": "Bawang Putih",
        "subtitle": "Allium sativum",
        "content": "Bawang Putih adalah tanaman yang sering digunakan sebagai bumbu masakan dan obat herbal. Bawang ini memiliki rasa yang kuat dan sering digunakan dalam berbagai hidangan, seperti tumisan, sup, dan saus. Bawang Putih berasal dari Asia Tengah dan telah digunakan sejak zaman kuno. Selain sebagai bumbu masakan, bawang Putih juga dikenal memiliki berbagai manfaat kesehatan, seperti menurunkan tekanan darah dan meningkatkan sistem kekebalan tubuh.",
        "origin": "Asia Tengah",
        "flavor": "pedas",
        "tags": "[\"herbal\", \"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1UXqGuJELVhyG8vThTIbxomcGUvVOs3W4/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:01:49.000Z"
    },
    {
        "id_herbs": 7,
        "title": "Biji Ketumbar",
        "subtitle": "Coriandrum sativum",
        "content": "Biji Ketumbar adalah rempah yang sering digunakan dalam masakan. Biji ini memiliki rasa yang khas dan sering digunakan dalam berbagai hidangan, seperti kari, sup, dan saus. Biji Ketumbar berasal dari wilayah Mediterania dan telah digunakan sejak zaman kuno. Selain sebagai bumbu masakan, biji Ketumbar juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Mediterania",
        "flavor": "pedas",
        "tags": "[\"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1KkO2LndBT-o_jg1aQ6nLLbwfwmi5HSpH/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:02:46.000Z"
    },
    {
        "id_herbs": 8,
        "title": "Bukan Rempah",
        "subtitle": "Non-rempah",
        "content": "Ini adalah contoh data yang bukan rempah. Data ini hanya digunakan sebagai placeholder dan tidak memiliki informasi yang relevan dengan rempah.",
        "origin": "N/A",
        "flavor": "N/A",
        "tags": "[\"non-rempah\"]",
        "image_url": "https://drive.google.com/file/d/1rHvG3H_fPyz4iYvoA9T_KnUZOro804lm/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:03:39.000Z"
    },
    {
        "id_herbs": 9,
        "title": "Bunga Lawang",
        "subtitle": "Illicium verum",
        "content": "Bunga Lawang adalah rempah yang sering digunakan dalam masakan. Rempah ini memiliki bentuk yang unik seperti bintang dan memiliki rasa manis yang khas. Bunga Lawang sering digunakan dalam berbagai hidangan, seperti sup, kari, dan minuman tradisional. Selain sebagai bumbu masakan, Bunga Lawang juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Asia Timur",
        "flavor": "manis",
        "tags": "[\"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1CWAt1DL_JCNLtKW7JskIy08Sa5sg8LUV/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:04:44.000Z"
    },
    {
        "id_herbs": 10,
        "title": "Cengkeh",
        "subtitle": "Syzygium aromaticum",
        "content": "Cengkeh adalah rempah yang sering digunakan dalam masakan dan obat herbal. Rempah ini memiliki rasa yang kuat dan sering digunakan dalam berbagai hidangan, seperti kari, sup, dan minuman tradisional. Cengkeh berasal dari Maluku dan telah digunakan sejak zaman kuno. Selain sebagai bumbu masakan, cengkeh juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan sistem kekebalan tubuh dan mengurangi nyeri.",
        "origin": "Maluku",
        "flavor": "pedas",
        "tags": "[\"herbal\", \"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1CWAt1DL_JCNLtKW7JskIy08Sa5sg8LUV/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:05:41.000Z"
    },
    {
        "id_herbs": 11,
        "title": "Daun Jeruk",
        "subtitle": "Citrus hystrix",
        "content": "Daun Jeruk adalah daun yang sering digunakan dalam masakan. Daun ini memiliki aroma yang segar dan sering digunakan dalam berbagai hidangan, seperti sup, kari, dan sambal. Daun Jeruk berasal dari Asia Tenggara dan telah digunakan dalam berbagai masakan tradisional. Selain sebagai bumbu masakan, daun Jeruk juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Asia Tenggara",
        "flavor": "segar",
        "tags": "[\"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1nOYCNCnNWENSHiruaPKjSfyQPUHRkN0w/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:06:45.000Z"
    },
    {
        "id_herbs": 12,
        "title": "Daun Kemangi",
        "subtitle": "Ocimum basilicum",
        "content": "Daun Kemangi adalah daun yang sering digunakan dalam masakan dan obat herbal. Daun ini memiliki aroma yang segar dan sering digunakan dalam berbagai hidangan, seperti salad, sup, dan sambal. Daun Kemangi berasal dari Asia Tenggara dan telah digunakan dalam berbagai masakan tradisional. Selain sebagai bumbu masakan, daun Kemangi juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Asia Tenggara",
        "flavor": "segar",
        "tags": "[\"herbal\", \"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1kapV4PIiZmpx5QCKjMBAyfxPmSoGrUdr/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:07:47.000Z"
    },
    {
        "id_herbs": 13,
        "title": "Daun Ketumbar",
        "subtitle": "Coriandrum sativum",
        "content": "Daun Ketumbar adalah daun yang sering digunakan dalam masakan. Daun ini memiliki aroma yang segar dan sering digunakan dalam berbagai hidangan, seperti salad, sup, dan sambal. Daun Ketumbar berasal dari wilayah Mediterania dan telah digunakan dalam berbagai masakan tradisional. Selain sebagai bumbu masakan, daun Ketumbar juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Mediterania",
        "flavor": "segar",
        "tags": "[\"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1kapV4PIiZmpx5QCKjMBAyfxPmSoGrUdr/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:08:34.000Z"
    },
    {
        "id_herbs": 14,
        "title": "Daun Salam",
        "subtitle": "Syzygium polyanthum",
        "content": "Daun Salam adalah daun yang sering digunakan dalam masakan. Daun ini memiliki aroma yang segar dan sering digunakan dalam berbagai hidangan, seperti sup, kari, dan sambal. Daun Salam berasal dari Asia Tenggara dan telah digunakan dalam berbagai masakan tradisional. Selain sebagai bumbu masakan, daun Salam juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Asia Tenggara",
        "flavor": "segar",
        "tags": "[\"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1CF6RfOV7owdCdXGoPAgcoE1jEx8_HZjt/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:09:29.000Z"
    },
    {
        "id_herbs": 15,
        "title": "Jahe",
        "subtitle": "Zingiber officinale",
        "content": "Jahe adalah rempah yang sering digunakan dalam masakan dan obat herbal. Rempah ini memiliki rasa yang kuat dan sering digunakan dalam berbagai hidangan, seperti sup, kari, dan minuman tradisional. Jahe berasal dari Asia Tenggara dan telah digunakan sejak zaman kuno. Selain sebagai bumbu masakan, jahe juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan sistem kekebalan tubuh dan mengurangi peradangan.",
        "origin": "Asia Tenggara",
        "flavor": "pedas",
        "tags": "[\"herbal\", \"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1Edui4qkkeiSEnZ6M3lXlqE4hGXUifD2W/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:12:07.000Z"
    },
    {
        "id_herbs": 16,
        "title": "Jinten",
        "subtitle": "Cuminum cyminum",
        "content": "Jinten adalah rempah yang sering digunakan dalam masakan. Rempah ini memiliki rasa yang khas dan sering digunakan dalam berbagai hidangan, seperti kari, sup, dan saus. Jinten berasal dari wilayah Mediterania dan telah digunakan sejak zaman kuno. Selain sebagai bumbu masakan, jinten juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Mediterania",
        "flavor": "pedas",
        "tags": "[\"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1TsnB0sv54_5c-z-PJhmudUxRUvGqzUXp/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:13:07.000Z"
    },
    {
        "id_herbs": 17,
        "title": "Kapulaga",
        "subtitle": "Elettaria cardamomum",
        "content": "Kapulaga adalah rempah yang sering digunakan dalam masakan dan obat herbal. Rempah ini memiliki rasa yang kuat dan sering digunakan dalam berbagai hidangan, seperti kari, sup, dan minuman tradisional. Kapulaga berasal dari India dan telah digunakan sejak zaman kuno. Selain sebagai bumbu masakan, kapulaga juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "India",
        "flavor": "pedas",
        "tags": "[\"herbal\", \"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1cho7yabQj69U-Taxbmk1d6f5huAZ7wEl/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:13:55.000Z"
    },
    {
        "id_herbs": 18,
        "title": "Kayu Manis",
        "subtitle": "Cinnamomum verum",
        "content": "Kayu Manis adalah rempah yang sering digunakan dalam masakan dan obat herbal. Rempah ini memiliki rasa manis yang khas dan sering digunakan dalam berbagai hidangan, seperti kue, minuman, dan kari. Kayu Manis berasal dari Sri Lanka dan telah digunakan sejak zaman kuno. Selain sebagai bumbu masakan, kayu manis juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Sri Lanka",
        "flavor": "manis",
        "tags": "[\"herbal\", \"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/13G8IkI2pwVp5vu95rLojfIHY8aygdvrj/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:14:39.000Z"
    },
    {
        "id_herbs": 19,
        "title": "Kayu Secang",
        "subtitle": "Caesalpinia sappan",
        "content": "Kayu Secang adalah kayu yang sering digunakan dalam minuman tradisional. Kayu ini memiliki warna merah yang khas dan sering digunakan dalam berbagai minuman, seperti wedang secang. Kayu Secang berasal dari Asia Tenggara dan telah digunakan dalam berbagai minuman tradisional. Selain sebagai bahan minuman, kayu secang juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan sirkulasi darah dan mengurangi peradangan.",
        "origin": "Asia Tenggara",
        "flavor": "segar",
        "tags": "[\"herbal\", \"minuman\"]",
        "image_url": "https://drive.google.com/file/d/1bQeeAkOq5YiH5CBKtlMS9p_UkICnY-Kn/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:22:43.000Z"
    },
    {
        "id_herbs": 20,
        "title": "Kemiri",
        "subtitle": "Aleurites moluccanus",
        "content": "Kemiri adalah biji yang sering digunakan dalam masakan. Biji ini memiliki rasa gurih yang khas dan sering digunakan dalam berbagai hidangan, seperti sambal, bumbu pecel, dan rendang. Kemiri berasal dari Asia Tenggara dan telah digunakan dalam berbagai masakan tradisional. Selain sebagai bumbu masakan, kemiri juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Asia Tenggara",
        "flavor": "gurih",
        "tags": "[\"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1CjlBr6gVmhRc9cGf3_MvI0p2LcoJi6ko/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:23:30.000Z"
    },
    {
        "id_herbs": 21,
        "title": "Kemukus",
        "subtitle": "Piper cubeba",
        "content": "Kemukus adalah rempah yang sering digunakan dalam masakan dan obat herbal. Rempah ini memiliki rasa pedas yang khas dan sering digunakan dalam berbagai hidangan, seperti kari, sup, dan minuman tradisional. Kemukus berasal dari Asia Tenggara dan telah digunakan sejak zaman kuno. Selain sebagai bumbu masakan, kemukus juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Asia Tenggara",
        "flavor": "pedas",
        "tags": "[\"herbal\", \"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1iEQ3s9oCkBHxIrh9yHqrMPCuRDMt20Yk/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:25:34.000Z"
    },
    {
        "id_herbs": 22,
        "title": "Kencur",
        "subtitle": "Kaempferia galanga",
        "content": "Kencur adalah rempah yang sering digunakan dalam masakan dan obat herbal. Rempah ini memiliki rasa pedas yang khas dan sering digunakan dalam berbagai hidangan, seperti sambal, sup, dan minuman tradisional. Kencur berasal dari Asia Tenggara dan telah digunakan sejak zaman kuno. Selain sebagai bumbu masakan, kencur juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Asia Tenggara",
        "flavor": "pedas",
        "tags": "[\"herbal\", \"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1qejXGNm3uKZm-WR5KPefCRmakdkkOIKB/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:27:34.000Z"
    },
    {
        "id_herbs": 23,
        "title": "Kluwek",
        "subtitle": "Pangium edule",
        "content": "Kluwek adalah biji yang sering digunakan dalam masakan tradisional. Biji ini memiliki rasa gurih yang khas dan sering digunakan dalam berbagai hidangan, seperti rawon dan brongkos. Kluwek berasal dari Asia Tenggara dan telah digunakan dalam berbagai masakan tradisional. Selain sebagai bumbu masakan, kluwek juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Asia Tenggara",
        "flavor": "gurih",
        "tags": "[\"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/18mNo5Ks1QmLOo6d257djiS9M5USrftwl/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:28:11.000Z"
    },
    {
        "id_herbs": 24,
        "title": "Kunyit",
        "subtitle": "Curcuma longa",
        "content": "Kunyit adalah rempah yang sering digunakan dalam masakan dan obat herbal. Rempah ini memiliki rasa pedas yang khas dan sering digunakan dalam berbagai hidangan, seperti kari, sup, dan minuman tradisional. Kunyit berasal dari Asia Tenggara dan telah digunakan sejak zaman kuno. Selain sebagai bumbu masakan, kunyit juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Asia Tenggara",
        "flavor": "pedas",
        "tags": "[\"herbal\", \"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1PO3LfuGn1NL9ko2N4QoIuX4lguU08L22/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:29:02.000Z"
    },
    {
        "id_herbs": 25,
        "title": "Lada",
        "subtitle": "Piper nigrum",
        "content": "Lada adalah rempah yang sering digunakan dalam masakan. Rempah ini memiliki rasa pedas yang khas dan sering digunakan dalam berbagai hidangan, seperti kari, sup, dan saus. Lada berasal dari India dan telah digunakan sejak zaman kuno. Selain sebagai bumbu masakan, lada juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "India",
        "flavor": "pedas",
        "tags": "[\"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1uLXnckoHBrHlT-MWqh7Y_bRIfzDxdg7c/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:30:38.000Z"
    },
    {
        "id_herbs": 26,
        "title": "Lengkuas",
        "subtitle": "Alpinia galanga",
        "content": "Lengkuas adalah rempah yang sering digunakan dalam masakan dan obat herbal. Rempah ini memiliki rasa pedas yang khas dan sering digunakan dalam berbagai hidangan, seperti kari, sup, dan minuman tradisional. Lengkuas berasal dari Asia Tenggara dan telah digunakan sejak zaman kuno. Selain sebagai bumbu masakan, lengkuas juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Asia Tenggara",
        "flavor": "pedas",
        "tags": "[\"herbal\", \"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1piqthj-OzL22c-5iXy0c1GKy4LC1-ND_/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:31:31.000Z"
    },
    {
        "id_herbs": 27,
        "title": "Pala",
        "subtitle": "Myristica fragrans",
        "content": "Pala adalah rempah yang sering digunakan dalam masakan dan obat herbal. Rempah ini memiliki rasa manis yang khas dan sering digunakan dalam berbagai hidangan, seperti kue, minuman, dan kari. Pala berasal dari Maluku dan telah digunakan sejak zaman kuno. Selain sebagai bumbu masakan, pala juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Maluku",
        "flavor": "manis",
        "tags": "[\"herbal\", \"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1ddsLuWVzt9qh1-wrSGWMMBS1y6I75T3b/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:32:11.000Z"
    },
    {
        "id_herbs": 28,
        "title": "Saffron",
        "subtitle": "Crocus sativus",
        "content": "Saffron adalah rempah yang sering digunakan dalam masakan dan obat herbal. Rempah ini memiliki rasa manis yang khas dan sering digunakan dalam berbagai hidangan, seperti kue, minuman, dan kari. Saffron berasal dari Iran dan telah digunakan sejak zaman kuno. Selain sebagai bumbu masakan, saffron juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Iran",
        "flavor": "manis",
        "tags": "[\"herbal\", \"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1gZYOaV6cKG4JWyXwBVOtVHQs-kS64zDX/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:32:58.000Z"
    },
    {
        "id_herbs": 29,
        "title": "Serai",
        "subtitle": "Cymbopogon citratus",
        "content": "Serai adalah rempah yang sering digunakan dalam masakan dan minuman tradisional. Rempah ini memiliki aroma segar yang khas dan sering digunakan dalam berbagai hidangan, seperti sup, kari, dan minuman tradisional. Serai berasal dari Asia Tenggara dan telah digunakan dalam berbagai masakan tradisional. Selain sebagai bumbu masakan, serai juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Asia Tenggara",
        "flavor": "segar",
        "tags": "[\"herbal\", \"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1hZLuXDWOcmfMfYYS4b9Bhre0RgHzf85B/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:33:40.000Z"
    },
    {
        "id_herbs": 30,
        "title": "Vanili",
        "subtitle": "Vanilla planifolia",
        "content": "Vanili adalah rempah yang sering digunakan dalam masakan dan minuman. Rempah ini memiliki rasa manis yang khas dan sering digunakan dalam berbagai hidangan, seperti kue, minuman, dan es krim. Vanili berasal dari Meksiko dan telah digunakan sejak zaman kuno. Selain sebagai bumbu masakan, vanili juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Meksiko",
        "flavor": "manis",
        "tags": "[\"herbal\", \"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1ZS1N8c8LMPPfT5PBjwuDJqbkWHlcmZGN/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:34:24.000Z"
    },
    {
        "id_herbs": 31,
        "title": "Wijen",
        "subtitle": "Sesamum indicum",
        "content": "Wijen adalah biji yang sering digunakan dalam masakan. Biji ini memiliki rasa gurih yang khas dan sering digunakan dalam berbagai hidangan, seperti sambal, bumbu pecel, dan roti. Wijen berasal dari Afrika dan telah digunakan dalam berbagai masakan tradisional. Selain sebagai bumbu masakan, wijen juga dikenal memiliki berbagai manfaat kesehatan, seperti meningkatkan pencernaan dan mengurangi peradangan.",
        "origin": "Afrika",
        "flavor": "gurih",
        "tags": "[\"bumbu\"]",
        "image_url": "https://drive.google.com/file/d/1vVSyaaHdrxR4twky0lbxP_YQE_NMk4RU/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T16:35:02.000Z"
    }
]
```
## Get Single Herb
```bash
GET /herbs/:id
```
## Response
```bash
{
    "id_herbs": 1,
    "title": "Adas",
    "subtitle": "Foeniculum vulgare",
    "content": "Adas adalah tanaman yang sering digunakan sebagai bumbu masakan dan obat herbal. Tanaman ini berasal dari wilayah Mediterania dan telah digunakan sejak zaman kuno. Adas memiliki rasa manis yang khas dan sering digunakan dalam berbagai masakan, termasuk sup, salad, dan hidangan daging. Selain itu, adas juga dikenal memiliki berbagai manfaat kesehatan, seperti membantu pencernaan dan mengurangi peradangan.",
    "origin": "Mediterania",
    "flavor": "manis",
    "tags": "[\"herbal\", \"obat\"]",
    "image_url": "https://drive.google.com/file/d/1uuCKzuEc3W9zattrQbGtJ0gulIs-OtGj/view?usp=drive_link",
    "created_at": "2024-12-06T09:37:34.000Z",
    "updated_at": "2024-12-10T12:08:41.000Z"
}
```
## Search Herb
```bash
GET /herbs/search
```
# Search herb using query param
| Parameter         | Type    | Description |
|-------------------|---------|-------------|
| `query`           | varchar | Required.   |
## Response
```bash
[
    {
        "id_herbs": 1,
        "title": "Adas",
        "subtitle": "Foeniculum vulgare",
        "content": "Adas adalah tanaman yang sering digunakan sebagai bumbu masakan dan obat herbal. Tanaman ini berasal dari wilayah Mediterania dan telah digunakan sejak zaman kuno. Adas memiliki rasa manis yang khas dan sering digunakan dalam berbagai masakan, termasuk sup, salad, dan hidangan daging. Selain itu, adas juga dikenal memiliki berbagai manfaat kesehatan, seperti membantu pencernaan dan mengurangi peradangan.",
        "origin": "Mediterania",
        "flavor": "manis",
        "tags": "[\"herbal\", \"obat\"]",
        "image_url": "https://drive.google.com/file/d/1uuCKzuEc3W9zattrQbGtJ0gulIs-OtGj/view?usp=drive_link",
        "created_at": "2024-12-06T09:37:34.000Z",
        "updated_at": "2024-12-10T12:08:41.000Z"
    }
]
```
## Favorites Endpoints
## Add Herb to Favorites
```bash
POST /favorites/add
```
## Response
```bash
message: "Herb removed from favorites!"
```
## Remove Herb from Favorites
```bash
POST /favorites/remove
```
## Response
```bash
message: "Herb removed from favorites!"
```
## Classification Endpoints
## Classification
```bash
POST /classification/infer
```
## Response
```bash
{
    "classification": "bawang merah",
    "index": 4,
    "url": "https://backend-spicetrack-1036509671472.asia-southeast2.run.app/herbs/4"
}
```






