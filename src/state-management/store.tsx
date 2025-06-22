import {create} from 'zustand'
interface EmployeeFilters {
    department: string | null;
    salaryFrom: number | null;
    salaryTo: number | null;
    ageFrom: number | null;
    ageTo: number | null;
    setDepartment: (department: string | null) => void;
    setSalaryFrom: (salaryFrom: number | null) => void;
    setAgeFrom: (ageFrom: number | null) => void;
    setSalaryTo: (salaryTo: number | null) => void;
    setAgeTo: (ageTo: number | null) => void;
}
const useEmployeeFilters = create<EmployeeFilters>(set => ({
    department: null,
    salaryFrom: null,
    salaryTo: null,
    ageFrom: null,
    ageTo: null,
    setAgeFrom: (ageFrom: number | null): void => set({
        ageFrom
    }),
    setAgeTo: (ageTo: number | null): void => set({
        ageTo
    }),
    setSalaryFrom: (salaryFrom: number | null): void => set({
        salaryFrom
    }),
    setSalaryTo: (salaryTo: number | null): void => set({
        salaryTo
    }),
    setDepartment: (department: string | null): void => set({
        department
    })
}));
export default useEmployeeFilters