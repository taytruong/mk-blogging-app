# Posts

- id: 
- title
- slug(đường dẫn)
- image
- createdAt(ngày tạo)
- status: 1(approved) 2(pending) 3(reject)
- content:
- userId
- categoryId

# Category

- id 
- title
- slug
- status: 1(approved) 2(pending)
- createdAt

# User

- id
- displayName
- email
- password
- avatar
- status: 1(active) 2(pending) 3(ban)
- role: 1(Admin) 2(Mod) 3(User)
- permissions: --> hard
- createdAt