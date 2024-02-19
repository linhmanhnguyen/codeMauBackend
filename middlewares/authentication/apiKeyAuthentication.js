import fs from 'fs'
import path from 'path'

const validAPIKey = () => {
    return (req, res, next) => {
        fs.readFile(path.join(path.resolve(), "/data/sites.json"), (err, data) => {
            const requestAPIKey = req.header("x-api-key")
            const json = JSON.parse(data)
            if (json.sites.some(site => site.apiKey === requestAPIKey)) {
                next()
            } else {
                return res.status(401).json({
                    error: "Unauthorized. Please check your authentication first!",
                });
            }
        })
    }
}


export default validAPIKey