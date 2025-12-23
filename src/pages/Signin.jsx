import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        if (!username || !password) return setError('Please enter username and password')

        setLoading(true)
        try {
            // Example API call; adjust endpoint as needed
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: username, password })
            })

            if (!res.ok) {
                const data = await res.json().catch(() => ({}))
                throw new Error(data.message || 'Sign in failed')
            }

            const data = await res.json()
            if (data.token) localStorage.setItem('token', data.token)
            navigate('/')
        } catch (err) {
            setError(err.message || 'Sign in failed')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'70vh'}}>
            <form onSubmit={handleSubmit} style={{width:340,padding:24,border:'1px solid #e6e6e6',borderRadius:8}}>
                <h2 style={{marginTop:0}}>Sign In</h2>
                {error && <div style={{color:'#b00020',marginBottom:12}}>{error}</div>}

                <label style={{display:'block',marginBottom:12}}>
                    <div style={{fontSize:13,marginBottom:6}}>Email or Username</div>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{width:'100%',padding:8,borderRadius:4,border:'1px solid #ccc'}}
                        placeholder="you@example.com"
                    />
                </label>

                <label style={{display:'block',marginBottom:16}}>
                    <div style={{fontSize:13,marginBottom:6}}>Password</div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{width:'100%',padding:8,borderRadius:4,border:'1px solid #ccc'}}
                        placeholder="••••••••"
                    />
                </label>

                <button type="submit" disabled={loading} style={{width:'100%',padding:10,borderRadius:4,background:'#1976d2',color:'#fff',border:0}}>
                    {loading ? 'Signing in...' : 'Sign In'}
                </button>

                <p style={{marginTop:12,fontSize:14}}>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </form>
        </div>
    )
}

export default Signin