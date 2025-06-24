import { ref } from 'vue'
import { doc, getDoc, updateDoc, onSnapshot, increment } from 'firebase/firestore'
import { db } from '../services/firebase'

const counterRef = doc(db, 'receipt-counters', 'receipts')

export function useInvoiceCounter() {
    const count = ref<number>(0)

    async function fetchInitialCount() {
        const snap = await getDoc(counterRef)
        if (snap.exists()) {
            count.value = snap.data().totalReceipts
        }
    }

    function subscribeToInvoiceCount(callback: (newCount: number) => void) {
        fetchInitialCount()
        onSnapshot(counterRef, (snap) => {
            if (snap.exists()) {
                const value = snap.data().totalReceipts
                count.value = value
                callback(value)
            }
        })
    }

    async function incrementInvoiceCount() {
        await updateDoc(counterRef, {
            totalReceipts: increment(1)
        })
    }

    return { count, subscribeToInvoiceCount, incrementInvoiceCount }
}