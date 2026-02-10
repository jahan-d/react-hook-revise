


# কোনটা কখন ব্যবহার করবা? (simple rule)

❓ Page দেখানোর আগেই data দরকার?
➡️ useLoaderData

❓ অনেক component এই data লাগবে?
➡️ fetch once → useContext

❓ শুধু এই component এ দরকার?
➡️ useEffect

❓ শুধু API call?
➡️ fetch (but inside something)