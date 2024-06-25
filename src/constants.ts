const VM_IP = process.env.REACT_APP_VM_IP;

if (!VM_IP) {
    throw new Error('VM_IP environment variable is not set');
}

export const BRP_UI_URL = `http://${VM_IP}:3007`;
export const BRP_BACKEND_URL = `http://${VM_IP}:8080`;
export const BMS_URL = `http://${VM_IP}:3006`;
