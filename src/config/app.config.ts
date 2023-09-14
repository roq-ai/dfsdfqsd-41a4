interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee'],
  tenantName: 'Organization',
  applicationName: 'dfsdfqsd',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View public Employee data', 'Interact with the Organization'],
  ownerAbilities: ['Manage the Organization', 'Invite HR Managers and Employees to the Organization'],
  getQuoteUrl: 'https://app.roq.ai/proposal/cc542d5e-3bc7-46a1-95b1-4cc7277e022c',
};
