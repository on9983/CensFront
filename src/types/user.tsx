export interface UserInterface {
    uid: string;
    role: string | null;
    email?: string | null;
    displayName?: string | null;
    photoURL?: string | null;
    test?: string | null;
    userDocument?: UserDocument;
}

export interface UserDocument {
    onboardingIsCompleted: boolean;
    emailVerified: boolean;
}

export interface UserSource {
    domaine?: string;
    nom: string;
    information?: string;
}
