import { initializeApp, getApps, cert } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"
import { getFirestore } from "firebase-admin/firestore"

const project_id = process.env.FIREBASE_PROJECT_ID
const client_email = process.env.FIREBASE_CLIENT_EMAIL
const private_key = process.env.FIREBASE_PRIVATE_KEY
 
const initFirebaseAdmin = () => {
    const apps = getApps()

    if (!apps.length) {
        initializeApp({
            credential: cert({
                projectId: project_id,
                clientEmail: client_email,
                privateKey: private_key?.replace(/\\n/g, "\n")

            })
        })
    }

    return {
        auth: getAuth(),
        db: getFirestore()
    }
}

export const { auth, db } = initFirebaseAdmin()