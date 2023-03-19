import Link from "next/link";



// return (
// 	<div className={styles.loginForm}>
// 	  <Link href="/" passHref></Link>
// 	  <h2>Login</h2>
// 	  <p>Login to access all features of Slate.</p>
// 	  <form onSubmit={handleLogin}>
// 		<div className={styles.inputContainer}>
// 		  <label>Email </label>
// 		  <input type="text" onChange={(e)=>{setEmail(e.target.value);;
// 		  }} name="email" required />
// 		</div>
// 		<div className={styles.inputContainer}>
// 		  <label>Password </label>
// 		  <input type="password" onChange={(e)=>{setPassword(e.target.value)}} name="pass" required />
// 		</div>
// 		<div className={styles.errorMsg}>
// 		 {errorMessage ? errorMessage : null}
// 		</div>
// 		<div className={styles.loginContainer}>
// 		  <input type="submit" value="Login" />
// 		</div>
// 	  </form>
// 	  <p>Not Registred Yet? <Link href='/signup' passHref><div className={styles.Link}>Create an account.</div></Link></p>
// 	</div>
//   )