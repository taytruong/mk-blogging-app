# Posts

- id:
- title
- slug(đường dẫn)
- image
- createdAt(ngày tạo)
- status: 1(approved) 2(pending) 3(reject)
- hot (true of false)
- content
- userId
- user: {id, username, fullname, avatar, description}
- categoryId
- category: {id, name, slug}

# Category

- id
- name
- slug
- status: 1(approved) 2(unapproved)
- createdAt

# User

- id
- displayName
- username
- email
- password
- avatar: url, image_name
- status: 1(active) 2(pending) 3(ban)
- role: 1(Admin) 2(Mod) 3(User)
- permissions:"ADD_POST" --> hard
- createdAt

# 

- api: firebasestore - mk-blogging
- https://api.imgbb.com/  ~ imageUploader in ReactQuill - PostUpdate