/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Ac = {
  __typename?: 'AC';
  annual_energy_consumption?: Maybe<Scalars['Float']['output']>;
  brand_name?: Maybe<Scalars['String']['output']>;
  colors?: Maybe<Scalars['String']['output']>;
  cooling_capacity?: Maybe<Scalars['String']['output']>;
  energy_efficiency_features?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  kw_rating?: Maybe<Scalars['Float']['output']>;
  manufacture_date?: Maybe<Scalars['String']['output']>;
  model_info_id: Scalars['String']['output'];
  model_name?: Maybe<Scalars['String']['output']>;
  origin_country?: Maybe<Scalars['String']['output']>;
  ps_mark?: Maybe<Scalars['Boolean']['output']>;
  refrigerant_type?: Maybe<Scalars['String']['output']>;
  specify_number?: Maybe<Scalars['String']['output']>;
};

export type ActionBy = {
  __typename?: 'ActionBy';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ActionLog = {
  __typename?: 'ActionLog';
  User?: Maybe<ActionBy>;
  action_by: Scalars['String']['output'];
  action_message: Scalars['String']['output'];
  action_on: Scalars['String']['output'];
  action_type: Scalars['String']['output'];
  action_value: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type AdminApplicantInfo = {
  __typename?: 'AdminApplicantInfo';
  Product?: Maybe<AdminProduct>;
  RegisteredBy?: Maybe<AdminUser>;
  company_address?: Maybe<Scalars['String']['output']>;
  company_brochure?: Maybe<Scalars['String']['output']>;
  company_city?: Maybe<Scalars['String']['output']>;
  company_country?: Maybe<Scalars['String']['output']>;
  company_name?: Maybe<Scalars['String']['output']>;
  company_province?: Maybe<Scalars['String']['output']>;
  contact_person_email?: Maybe<Scalars['String']['output']>;
  contact_person_name?: Maybe<Scalars['String']['output']>;
  contact_person_phone?: Maybe<Scalars['String']['output']>;
  contact_person_telephone?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  factory_address?: Maybe<Scalars['String']['output']>;
  factory_city?: Maybe<Scalars['String']['output']>;
  factory_country?: Maybe<Scalars['String']['output']>;
  factory_province?: Maybe<Scalars['String']['output']>;
  factory_telephone?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  member_of_association?: Maybe<Scalars['Boolean']['output']>;
  membership_name?: Maybe<Scalars['String']['output']>;
  membership_number?: Maybe<Scalars['String']['output']>;
  membership_year?: Maybe<Scalars['String']['output']>;
  office_managing_director_name?: Maybe<Scalars['String']['output']>;
  office_telephone?: Maybe<Scalars['String']['output']>;
  product_brochure?: Maybe<Scalars['String']['output']>;
  registered_with_chamber?: Maybe<Scalars['Boolean']['output']>;
  registration_number?: Maybe<Scalars['String']['output']>;
  registration_year?: Maybe<Scalars['String']['output']>;
  sales_network_regions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status?: Maybe<Scalars['String']['output']>;
  user_agreement?: Maybe<Scalars['Boolean']['output']>;
};

export type AdminAssignPrintingOrderInput = {
  printing_order_id: Scalars['String']['input'];
  status: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};

export type AdminAssignPrintingOrderPayload = {
  __typename?: 'AdminAssignPrintingOrderPayload';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type AdminAuthPayload = {
  __typename?: 'AdminAuthPayload';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  token: Scalars['String']['output'];
};

export type AdminChangePrintingOrderStatusInput = {
  printing_order_id: Scalars['String']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
};

export type AdminChangePrintingOrderStatusPayload = {
  __typename?: 'AdminChangePrintingOrderStatusPayload';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type AdminDashboardData = {
  __typename?: 'AdminDashboardData';
  applicants: ApplicantCounts;
  models: ModelCounts;
  payments: PaymentCounts;
  vendors: Scalars['Int']['output'];
};

export type AdminGetAllPrintingOrdersResult = {
  __typename?: 'AdminGetAllPrintingOrdersResult';
  count: Scalars['Int']['output'];
  currentPage: Scalars['Int']['output'];
  orders: Array<AdminPrintingOrder>;
  totalPages: Scalars['Int']['output'];
};

export type AdminGetPaymentByIdResponse = {
  __typename?: 'AdminGetPaymentByIdResponse';
  actionLogs?: Maybe<Array<Maybe<ActionLog>>>;
  payment?: Maybe<AdminPayment>;
};

export type AdminGetPrintingOrderByIdResult = {
  __typename?: 'AdminGetPrintingOrderByIdResult';
  actionLogs: Array<ActionLog>;
  order: AdminPrintingOrder;
};

export type AdminGetProducts = {
  __typename?: 'AdminGetProducts';
  message?: Maybe<Scalars['String']['output']>;
  products?: Maybe<Array<Maybe<AdminProduct>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type AdminModelInfo = {
  __typename?: 'AdminModelInfo';
  colour?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  energy_consumption_details?: Maybe<Scalars['String']['output']>;
  estimated_annual_production?: Maybe<Scalars['String']['output']>;
  estimated_production_per_anum?: Maybe<Scalars['String']['output']>;
  has_ps_mark?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_certificate_generated?: Maybe<Scalars['Boolean']['output']>;
  model_name?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  specify_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type AdminModelInfowithApplicant = {
  __typename?: 'AdminModelInfowithApplicant';
  ApplicantInfo?: Maybe<ApplicantInfo>;
  ac?: Maybe<Ac>;
  createdAt?: Maybe<Scalars['String']['output']>;
  estimated_production_per_anum?: Maybe<Scalars['String']['output']>;
  fan?: Maybe<Fan>;
  fan_type?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_certificate_generated?: Maybe<Scalars['Boolean']['output']>;
  ledLight?: Maybe<LedLight>;
  model_name?: Maybe<Scalars['String']['output']>;
  motor?: Maybe<Motor>;
  product_id?: Maybe<Scalars['String']['output']>;
  refrigerator?: Maybe<Refrigerator>;
  remarks_comments?: Maybe<Scalars['String']['output']>;
  service_value?: Maybe<Scalars['String']['output']>;
  start_rating?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  sweep_size?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type AdminPayment = {
  __typename?: 'AdminPayment';
  ModelInfo?: Maybe<AdminModelInfo>;
  Product?: Maybe<AdminProduct>;
  User?: Maybe<AdminUser>;
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  demand_draft?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  pay_order_number?: Maybe<Scalars['String']['output']>;
  payment_date?: Maybe<Scalars['String']['output']>;
  payment_type?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AdminPrintingOrder = {
  __typename?: 'AdminPrintingOrder';
  Buyer?: Maybe<Buyer>;
  Payments?: Maybe<Array<Maybe<Payment>>>;
  Seller?: Maybe<Seller>;
  StickerOrders?: Maybe<Array<Maybe<AdminStickerOrder>>>;
  address?: Maybe<Scalars['String']['output']>;
  assigned_by?: Maybe<Scalars['String']['output']>;
  assigned_to?: Maybe<Scalars['String']['output']>;
  buyer_id?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  delivery_company_name?: Maybe<Scalars['String']['output']>;
  delivery_type?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  product_id?: Maybe<Scalars['String']['output']>;
  seller_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total_price?: Maybe<Scalars['Float']['output']>;
  total_quantity?: Maybe<Scalars['Int']['output']>;
  tracking_id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type AdminProduct = {
  __typename?: 'AdminProduct';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AdminStickerOrder = {
  __typename?: 'AdminStickerOrder';
  ModelInfo?: Maybe<ModelInfo>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  model_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  printing_id?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type AdminUpdateAdminInput = {
  allowed_access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  allowed_products?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cnic?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  designation?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  father_name?: InputMaybe<Scalars['String']['input']>;
  is_committee_head?: InputMaybe<Scalars['Boolean']['input']>;
  is_committee_member?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  profile_picture?: InputMaybe<Scalars['String']['input']>;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  allowed_access?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  allowed_products?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  cnic?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  designation?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  father_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_committee_head?: Maybe<Scalars['Boolean']['output']>;
  is_md?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  profile_picture?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

export type AdminsPaginated = {
  __typename?: 'AdminsPaginated';
  admins?: Maybe<Array<Maybe<AdminUser>>>;
  count?: Maybe<Scalars['Int']['output']>;
  currentPage?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AnnualCashInData = {
  __typename?: 'AnnualCashInData';
  amount?: Maybe<Scalars['Float']['output']>;
  month?: Maybe<Scalars['String']['output']>;
};

export type ApplicantCounts = {
  __typename?: 'ApplicantCounts';
  approved: Scalars['Int']['output'];
  pending: Scalars['Int']['output'];
  rejected: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ApplicantInfo = {
  __typename?: 'ApplicantInfo';
  assign_by?: Maybe<Scalars['String']['output']>;
  assign_to?: Maybe<Scalars['String']['output']>;
  company_address?: Maybe<Scalars['String']['output']>;
  company_brochure?: Maybe<Scalars['String']['output']>;
  company_city?: Maybe<Scalars['String']['output']>;
  company_country?: Maybe<Scalars['String']['output']>;
  company_name?: Maybe<Scalars['String']['output']>;
  company_province?: Maybe<Scalars['String']['output']>;
  contact_person_email?: Maybe<Scalars['String']['output']>;
  contact_person_name?: Maybe<Scalars['String']['output']>;
  contact_person_phone?: Maybe<Scalars['String']['output']>;
  contact_person_telephone?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  factory_address?: Maybe<Scalars['String']['output']>;
  factory_city?: Maybe<Scalars['String']['output']>;
  factory_country?: Maybe<Scalars['String']['output']>;
  factory_province?: Maybe<Scalars['String']['output']>;
  factory_telephone?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  member_of_association?: Maybe<Scalars['Boolean']['output']>;
  membership_name?: Maybe<Scalars['String']['output']>;
  membership_number?: Maybe<Scalars['String']['output']>;
  membership_year?: Maybe<Scalars['String']['output']>;
  office_managing_director_name?: Maybe<Scalars['String']['output']>;
  office_telephone?: Maybe<Scalars['String']['output']>;
  product_brochure?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  registered_with_chamber?: Maybe<Scalars['Boolean']['output']>;
  registration_number?: Maybe<Scalars['String']['output']>;
  registration_year?: Maybe<Scalars['String']['output']>;
  sales_network_regions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  user_agreement?: Maybe<Scalars['Boolean']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type ApplicantInfoInput = {
  company_address?: InputMaybe<Scalars['String']['input']>;
  company_brochure?: InputMaybe<Scalars['String']['input']>;
  company_city?: InputMaybe<Scalars['String']['input']>;
  company_country?: InputMaybe<Scalars['String']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  company_province?: InputMaybe<Scalars['String']['input']>;
  contact_person_email?: InputMaybe<Scalars['String']['input']>;
  contact_person_name?: InputMaybe<Scalars['String']['input']>;
  contact_person_phone?: InputMaybe<Scalars['String']['input']>;
  contact_person_telephone?: InputMaybe<Scalars['String']['input']>;
  factory_address?: InputMaybe<Scalars['String']['input']>;
  factory_city?: InputMaybe<Scalars['String']['input']>;
  factory_country?: InputMaybe<Scalars['String']['input']>;
  factory_province?: InputMaybe<Scalars['String']['input']>;
  factory_telephone?: InputMaybe<Scalars['String']['input']>;
  member_of_association?: InputMaybe<Scalars['Boolean']['input']>;
  membership_name?: InputMaybe<Scalars['String']['input']>;
  membership_number?: InputMaybe<Scalars['String']['input']>;
  membership_year?: InputMaybe<Scalars['String']['input']>;
  office_managing_director_name?: InputMaybe<Scalars['String']['input']>;
  office_telephone?: InputMaybe<Scalars['String']['input']>;
  product_brochure?: InputMaybe<Scalars['String']['input']>;
  registered_with_chamber?: InputMaybe<Scalars['Boolean']['input']>;
  registration_number?: InputMaybe<Scalars['String']['input']>;
  registration_year?: InputMaybe<Scalars['String']['input']>;
  sales_network_regions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  user_agreement?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ApplicantInfoPagination = {
  __typename?: 'ApplicantInfoPagination';
  applicants?: Maybe<Array<Maybe<AdminApplicantInfo>>>;
  count: Scalars['Int']['output'];
  currentPage: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type ApplicantInfoWithLogs = {
  __typename?: 'ApplicantInfoWithLogs';
  actionLogs?: Maybe<Array<Maybe<ActionLog>>>;
  applicantInfo?: Maybe<AdminApplicantInfo>;
  models?: Maybe<Array<Maybe<ModelInfo>>>;
};

export type ApplicationMetrics = {
  __typename?: 'ApplicationMetrics';
  averageProcessingTime?: Maybe<Scalars['Float']['output']>;
  detailsByMonth?: Maybe<Array<Maybe<MetricDetails>>>;
  metricType?: Maybe<Scalars['String']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ApplicationMetricsFilter = {
  product_id?: InputMaybe<Scalars['String']['input']>;
  specificMonth?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  success?: Maybe<Scalars['Boolean']['output']>;
  token: Scalars['String']['output'];
};

export type BatchVolunteerKeyInput = {
  maxUseCount: Scalars['Int']['input'];
  registrationKeys: Array<Scalars['String']['input']>;
};

export type BatchVolunteerKeyResponse = {
  __typename?: 'BatchVolunteerKeyResponse';
  count: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  volunteerKeys?: Maybe<Array<VolunteerKeyType>>;
};

export type Buyer = {
  __typename?: 'Buyer';
  name?: Maybe<Scalars['String']['output']>;
};

export type Certificate = {
  __typename?: 'Certificate';
  ApplicantInfo?: Maybe<CertificateApplicantInfo>;
  ModelInfo?: Maybe<CertificateModelInfo>;
  Product?: Maybe<CertificateProduct>;
  User?: Maybe<CertificateUser>;
  createdAt?: Maybe<Scalars['String']['output']>;
  expiry_date?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CertificateApplicantInfo = {
  __typename?: 'CertificateApplicantInfo';
  company_address?: Maybe<Scalars['String']['output']>;
  company_city?: Maybe<Scalars['String']['output']>;
  company_country?: Maybe<Scalars['String']['output']>;
  company_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type CertificateFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type CertificateModelInfo = {
  __typename?: 'CertificateModelInfo';
  colour?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  model_name?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['String']['output']>;
  service_value?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  start_rating?: Maybe<Scalars['Float']['output']>;
};

export type CertificatePagination = {
  __typename?: 'CertificatePagination';
  certificates?: Maybe<Array<Maybe<Certificate>>>;
  count?: Maybe<Scalars['Int']['output']>;
  currentPage?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type CertificateProduct = {
  __typename?: 'CertificateProduct';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CertificateUser = {
  __typename?: 'CertificateUser';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ClientCreatePrintingOrderInput = {
  address: Scalars['String']['input'];
  delivery_type?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<PaymentInput>;
  product_id: Scalars['String']['input'];
  seller_id: Scalars['String']['input'];
  sticker_orders: Array<StickerOrderInput>;
  total_quantity: Scalars['Int']['input'];
};

export type ClientGResubmissionType = {
  __typename?: 'ClientGResubmissionType';
  message?: Maybe<Scalars['String']['output']>;
};

export type ClientGetPrintingOrderByIdResult = {
  __typename?: 'ClientGetPrintingOrderByIdResult';
  PrintingOrder?: Maybe<PrintingOrder>;
  actionLogs?: Maybe<Array<Maybe<ActionLog>>>;
};

export type ClientGoToDashboardType = {
  __typename?: 'ClientGoTODashboardType';
  message?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type ClientNews = {
  __typename?: 'ClientNews';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ClientNewsPagination = {
  __typename?: 'ClientNewsPagination';
  currentPage: Scalars['Int']['output'];
  news: Array<News>;
  totalCount: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Communication = {
  __typename?: 'Communication';
  body: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  subject: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  variables?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type CommunicationFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};

export type CommunicationInput = {
  body: Scalars['String']['input'];
  name: Scalars['String']['input'];
  subject: Scalars['String']['input'];
  variables?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CommunicationsResponse = {
  __typename?: 'CommunicationsResponse';
  communications?: Maybe<Array<Maybe<Communication>>>;
  count: Scalars['Int']['output'];
  currentPage: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Company = {
  __typename?: 'Company';
  cnic?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  father_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  profile_picture?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CompanyCounts = {
  __typename?: 'CompanyCounts';
  approved: Scalars['Int']['output'];
  pending: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CompanyFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyResponse = {
  __typename?: 'CompanyResponse';
  count: Scalars['Int']['output'];
  currentPage: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
  users?: Maybe<Array<Maybe<Company>>>;
};

export type CreateAcInput = {
  annual_energy_consumption?: InputMaybe<Scalars['Float']['input']>;
  brand_name?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Scalars['String']['input']>;
  cooling_capacity?: InputMaybe<Scalars['String']['input']>;
  energy_efficiency_features?: InputMaybe<Scalars['String']['input']>;
  kw_rating?: InputMaybe<Scalars['Float']['input']>;
  manufacture_date?: InputMaybe<Scalars['String']['input']>;
  model_name?: InputMaybe<Scalars['String']['input']>;
  origin_country?: InputMaybe<Scalars['String']['input']>;
  ps_mark?: InputMaybe<Scalars['Boolean']['input']>;
  refrigerant_type?: InputMaybe<Scalars['String']['input']>;
  specify_number?: InputMaybe<Scalars['String']['input']>;
};

export type CreateFanInput = {
  colors?: InputMaybe<Scalars['String']['input']>;
  energy_efficiency_features?: InputMaybe<Scalars['String']['input']>;
  model_name?: InputMaybe<Scalars['String']['input']>;
  ps_mark?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['String']['input']>;
  size_capacity?: InputMaybe<Scalars['Int']['input']>;
  specify_number?: InputMaybe<Scalars['String']['input']>;
};

export type CreateLedLightInput = {
  bar_code?: InputMaybe<Scalars['String']['input']>;
  brand_name?: InputMaybe<Scalars['String']['input']>;
  chromaticity_tolerance?: InputMaybe<Scalars['Int']['input']>;
  color_rendering_index?: InputMaybe<Scalars['Int']['input']>;
  color_temperature?: InputMaybe<Scalars['Int']['input']>;
  country_of_origin?: InputMaybe<Scalars['String']['input']>;
  efficacy?: InputMaybe<Scalars['Float']['input']>;
  flux?: InputMaybe<Scalars['Int']['input']>;
  lamp_length?: InputMaybe<Scalars['Int']['input']>;
  lamp_type?: InputMaybe<Scalars['String']['input']>;
  manufacture_date?: InputMaybe<Scalars['String']['input']>;
  max_diameter?: InputMaybe<Scalars['Int']['input']>;
  max_voltage?: InputMaybe<Scalars['Int']['input']>;
  mercury_content?: InputMaybe<Scalars['Float']['input']>;
  min_voltage?: InputMaybe<Scalars['Int']['input']>;
  model_number?: InputMaybe<Scalars['String']['input']>;
  power_factor?: InputMaybe<Scalars['Float']['input']>;
  rated_frequency?: InputMaybe<Scalars['Int']['input']>;
  rated_lifetime?: InputMaybe<Scalars['Int']['input']>;
  rated_power?: InputMaybe<Scalars['Float']['input']>;
  risk_group?: InputMaybe<Scalars['String']['input']>;
  standby_power?: InputMaybe<Scalars['Float']['input']>;
  warranty_years?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateMotorInput = {
  brand_name?: InputMaybe<Scalars['String']['input']>;
  country_of_manufacture?: InputMaybe<Scalars['String']['input']>;
  date_format?: InputMaybe<Scalars['String']['input']>;
  date_marked?: InputMaybe<Scalars['Boolean']['input']>;
  enclosure_rating?: InputMaybe<Scalars['String']['input']>;
  first_manufactured_year?: InputMaybe<Scalars['Int']['input']>;
  frame_code?: InputMaybe<Scalars['String']['input']>;
  manufacturer_name?: InputMaybe<Scalars['String']['input']>;
  model_number?: InputMaybe<Scalars['String']['input']>;
  motor_design?: InputMaybe<Scalars['String']['input']>;
  motor_duty?: InputMaybe<Scalars['String']['input']>;
  motor_insulation?: InputMaybe<Scalars['String']['input']>;
  mounting_code?: InputMaybe<Scalars['String']['input']>;
  number_of_poles?: InputMaybe<Scalars['Int']['input']>;
  phase_type?: InputMaybe<Scalars['String']['input']>;
  rated_frequency?: InputMaybe<Scalars['Int']['input']>;
  rated_power_output?: InputMaybe<Scalars['Float']['input']>;
  rated_speed?: InputMaybe<Scalars['Int']['input']>;
  rated_voltage?: InputMaybe<Scalars['Int']['input']>;
  replaces_other_model?: InputMaybe<Scalars['Boolean']['input']>;
  state_model?: InputMaybe<Scalars['String']['input']>;
  website_url?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRefrigeratorInput = {
  annual_energy_consumption?: InputMaybe<Scalars['Float']['input']>;
  brand_name?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Scalars['String']['input']>;
  energy_efficiency_features?: InputMaybe<Scalars['String']['input']>;
  kw_rating?: InputMaybe<Scalars['Float']['input']>;
  manufacture_date?: InputMaybe<Scalars['String']['input']>;
  model_name?: InputMaybe<Scalars['String']['input']>;
  origin_country?: InputMaybe<Scalars['String']['input']>;
  ps_mark?: InputMaybe<Scalars['Boolean']['input']>;
  refrigerant_type?: InputMaybe<Scalars['String']['input']>;
  specify_number?: InputMaybe<Scalars['String']['input']>;
  total_volume_litres?: InputMaybe<Scalars['Int']['input']>;
};

export type DashboardData = {
  __typename?: 'DashboardData';
  annualCashInData: Array<AnnualCashInData>;
  labReportCounts: LabReportCounts;
  modelInfoCounts: ModelInfoCounts;
  recentModels: Array<ModelInfoSummary>;
  recentPayments: Array<PaymentSummary>;
};

export type DateRange = {
  __typename?: 'DateRange';
  endDate?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
};

export type DateRangeInput = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};

export type Fan = {
  __typename?: 'Fan';
  colors?: Maybe<Scalars['String']['output']>;
  energy_efficiency_features?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  model_info_id: Scalars['String']['output'];
  model_name?: Maybe<Scalars['String']['output']>;
  ps_mark?: Maybe<Scalars['Boolean']['output']>;
  rating?: Maybe<Scalars['String']['output']>;
  size_capacity?: Maybe<Scalars['Int']['output']>;
  specify_number?: Maybe<Scalars['String']['output']>;
};

export type FirmUser = {
  __typename?: 'FirmUser';
  address?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  cnic?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  father_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mod_of_delivery?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  profile_picture?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  sticker_cost?: Maybe<Scalars['Float']['output']>;
};

export type GetStatusRepsonse = {
  __typename?: 'GetStatusRepsonse';
  applicantInfo?: Maybe<ApplicantInfo>;
  labReport?: Maybe<LabReport>;
  model?: Maybe<ModelInfoSummary>;
  modelPayment?: Maybe<PaymentSummary>;
  productPayment?: Maybe<PaymentSummary>;
  userProduct?: Maybe<UserProduct>;
};

export type LedLight = {
  __typename?: 'LEDLight';
  bar_code?: Maybe<Scalars['String']['output']>;
  brand_name?: Maybe<Scalars['String']['output']>;
  chromaticity_tolerance?: Maybe<Scalars['Int']['output']>;
  color_rendering_index?: Maybe<Scalars['Int']['output']>;
  color_temperature?: Maybe<Scalars['Int']['output']>;
  country_of_origin?: Maybe<Scalars['String']['output']>;
  efficacy?: Maybe<Scalars['Float']['output']>;
  flux?: Maybe<Scalars['Int']['output']>;
  lamp_length?: Maybe<Scalars['Int']['output']>;
  lamp_type?: Maybe<Scalars['String']['output']>;
  manufacture_date?: Maybe<Scalars['String']['output']>;
  max_diameter?: Maybe<Scalars['Int']['output']>;
  max_voltage?: Maybe<Scalars['Int']['output']>;
  mercury_content?: Maybe<Scalars['Float']['output']>;
  min_voltage?: Maybe<Scalars['Int']['output']>;
  model_info_id?: Maybe<Scalars['String']['output']>;
  model_number?: Maybe<Scalars['String']['output']>;
  power_factor?: Maybe<Scalars['Float']['output']>;
  rated_frequency?: Maybe<Scalars['Int']['output']>;
  rated_lifetime?: Maybe<Scalars['Int']['output']>;
  rated_power?: Maybe<Scalars['Float']['output']>;
  risk_group?: Maybe<Scalars['String']['output']>;
  standby_power?: Maybe<Scalars['Float']['output']>;
  warranty_years?: Maybe<Scalars['Int']['output']>;
};

export type LabReport = {
  __typename?: 'LabReport';
  Product?: Maybe<AdminProduct>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lab?: Maybe<LabUser>;
  lab_country?: Maybe<Scalars['String']['output']>;
  lab_id?: Maybe<Scalars['String']['output']>;
  lab_user_name?: Maybe<Scalars['String']['output']>;
  model_info_id?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  report_from?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  test_report?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<LabUser>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type LabReportCounts = {
  __typename?: 'LabReportCounts';
  approved: Scalars['Int']['output'];
  pending: Scalars['Int']['output'];
  rejected: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LabReportFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type LabReportInput = {
  lab_country?: InputMaybe<Scalars['String']['input']>;
  lab_id?: InputMaybe<Scalars['String']['input']>;
  lab_user_name?: InputMaybe<Scalars['String']['input']>;
  report_from?: InputMaybe<Scalars['String']['input']>;
  test_report?: InputMaybe<Scalars['String']['input']>;
};

export type LabReportPagination = {
  __typename?: 'LabReportPagination';
  count?: Maybe<Scalars['Int']['output']>;
  currentPage?: Maybe<Scalars['Int']['output']>;
  labReports?: Maybe<Array<Maybe<LabReport>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LabUser = {
  __typename?: 'LabUser';
  allowed_products?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  cnic?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  father_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lab_category?: Maybe<Scalars['String']['output']>;
  lab_expires?: Maybe<Scalars['String']['output']>;
  lab_origin?: Maybe<Scalars['String']['output']>;
  lab_type?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  profile_picture?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type LabUserInput = {
  allowed_products?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cnic?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  father_name?: InputMaybe<Scalars['String']['input']>;
  lab_category?: InputMaybe<Scalars['String']['input']>;
  lab_expires?: InputMaybe<Scalars['String']['input']>;
  lab_origin?: InputMaybe<Scalars['String']['input']>;
  lab_type?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  profile_picture?: InputMaybe<Scalars['String']['input']>;
};

export type LabsPaginated = {
  __typename?: 'LabsPaginated';
  count?: Maybe<Scalars['Int']['output']>;
  currentPage?: Maybe<Scalars['Int']['output']>;
  labs?: Maybe<Array<Maybe<LabUser>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ManufacturerRevenue = {
  __typename?: 'ManufacturerRevenue';
  company_name: Scalars['String']['output'];
  labelPrintingFeeRevenue: Scalars['Float']['output'];
  modelFeeRevenue: Scalars['Float']['output'];
  registrationFeeRevenue: Scalars['Float']['output'];
  totalRevenue: Scalars['Float']['output'];
};

export type ManufacturerRevenueFilter = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};

export type Message = {
  __typename?: 'Message';
  message: Scalars['String']['output'];
};

export type MetricDetails = {
  __typename?: 'MetricDetails';
  approvals?: Maybe<Scalars['Int']['output']>;
  averageProcessingTime?: Maybe<Scalars['Float']['output']>;
  month?: Maybe<Scalars['String']['output']>;
  rejections?: Maybe<Scalars['Int']['output']>;
  submissions?: Maybe<Scalars['Int']['output']>;
};

export type ModelCounts = {
  __typename?: 'ModelCounts';
  approved: Scalars['Int']['output'];
  pending: Scalars['Int']['output'];
  rejected: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ModelInfo = {
  __typename?: 'ModelInfo';
  ac?: Maybe<Ac>;
  createdAt?: Maybe<Scalars['String']['output']>;
  estimated_production_per_anum?: Maybe<Scalars['String']['output']>;
  fan?: Maybe<Fan>;
  fan_type?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_certificate_generated?: Maybe<Scalars['Boolean']['output']>;
  ledLight?: Maybe<LedLight>;
  model_name?: Maybe<Scalars['String']['output']>;
  motor?: Maybe<Motor>;
  product_id?: Maybe<Scalars['String']['output']>;
  refrigerator?: Maybe<Refrigerator>;
  remarks_comments?: Maybe<Scalars['String']['output']>;
  service_value?: Maybe<Scalars['String']['output']>;
  start_rating?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  sweep_size?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type ModelInfoCounts = {
  __typename?: 'ModelInfoCounts';
  approved: Scalars['Int']['output'];
  pending: Scalars['Int']['output'];
  rejected: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ModelInfoFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type ModelInfoInput = {
  ac?: InputMaybe<CreateAcInput>;
  estimated_production_per_anum?: InputMaybe<Scalars['String']['input']>;
  fan?: InputMaybe<CreateFanInput>;
  ledLight?: InputMaybe<CreateLedLightInput>;
  model_name?: InputMaybe<Scalars['String']['input']>;
  motor?: InputMaybe<CreateMotorInput>;
  refrigerator?: InputMaybe<CreateRefrigeratorInput>;
};

export type ModelInfoResponse = {
  __typename?: 'ModelInfoResponse';
  count: Scalars['Int']['output'];
  currentPage: Scalars['Int']['output'];
  models: Array<ModelInfo>;
  totalPages: Scalars['Int']['output'];
};

export type ModelInfoSummary = {
  __typename?: 'ModelInfoSummary';
  colour?: Maybe<Scalars['String']['output']>;
  company_brochure?: Maybe<Scalars['String']['output']>;
  energy_consumption_details?: Maybe<Scalars['String']['output']>;
  estimated_annual_production?: Maybe<Scalars['String']['output']>;
  has_ps_mark?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  model_name?: Maybe<Scalars['String']['output']>;
  product_brochure?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  specify_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ModelInfoWithDetails = {
  __typename?: 'ModelInfoWithDetails';
  ApplicantInfo?: Maybe<AdminApplicantInfo>;
  actionLogs?: Maybe<Array<Maybe<ActionLog>>>;
  labReport?: Maybe<LabReport>;
  modelInfo?: Maybe<ModelInfo>;
  payments?: Maybe<AdminPayment>;
};

export type ModelInfoWithPayments = {
  __typename?: 'ModelInfoWithPayments';
  certificates?: Maybe<Array<Maybe<Certificate>>>;
  labReports?: Maybe<Array<Maybe<LabReport>>>;
  modelInfo?: Maybe<ModelInfo>;
  payments?: Maybe<Array<Payment>>;
};

export type ModelPagination = {
  __typename?: 'ModelPagination';
  count?: Maybe<Scalars['Int']['output']>;
  currentPage?: Maybe<Scalars['Int']['output']>;
  models?: Maybe<Array<Maybe<AdminModelInfowithApplicant>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ModelSignature = {
  __typename?: 'ModelSignature';
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  img_url?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ModelsRating = {
  __typename?: 'ModelsRating';
  Cost: Scalars['Float']['output'];
  KWH: Scalars['Float']['output'];
  Name: Scalars['String']['output'];
  Rating: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Motor = {
  __typename?: 'Motor';
  brand_name?: Maybe<Scalars['String']['output']>;
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  date_format?: Maybe<Scalars['String']['output']>;
  date_marked?: Maybe<Scalars['Boolean']['output']>;
  enclosure_rating?: Maybe<Scalars['String']['output']>;
  first_manufactured_year?: Maybe<Scalars['Int']['output']>;
  frame_code?: Maybe<Scalars['String']['output']>;
  manufacturer_name?: Maybe<Scalars['String']['output']>;
  model_info_id?: Maybe<Scalars['String']['output']>;
  model_number?: Maybe<Scalars['String']['output']>;
  motor_design?: Maybe<Scalars['String']['output']>;
  motor_duty?: Maybe<Scalars['String']['output']>;
  motor_insulation?: Maybe<Scalars['String']['output']>;
  mounting_code?: Maybe<Scalars['String']['output']>;
  number_of_poles?: Maybe<Scalars['Int']['output']>;
  phase_type?: Maybe<Scalars['String']['output']>;
  rated_frequency?: Maybe<Scalars['Int']['output']>;
  rated_power_output?: Maybe<Scalars['Float']['output']>;
  rated_speed?: Maybe<Scalars['Int']['output']>;
  rated_voltage?: Maybe<Scalars['Int']['output']>;
  replaces_other_model?: Maybe<Scalars['Boolean']['output']>;
  state_model?: Maybe<Scalars['String']['output']>;
  website_url?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminAssignApplicantInfo?: Maybe<SuccessResponse>;
  adminAssignModelInfo: SuccessResponse;
  adminAssignPrintingOrder: AdminAssignPrintingOrderPayload;
  adminAssignUserProduct: SuccessResponse;
  adminBatchCreateVolunteerKeys: BatchVolunteerKeyResponse;
  adminChangeApplicantStatus?: Maybe<SuccessResponse>;
  adminChangeCompanyStatus?: Maybe<SuccessResponse>;
  adminChangeModelStatus?: Maybe<SuccessResponse>;
  adminChangePaymentStatus?: Maybe<SuccessResponse>;
  adminChangePrintingOrderStatus: AdminChangePrintingOrderStatusPayload;
  adminChangeUserProductStatus?: Maybe<SuccessResponse>;
  adminCreateAdmin?: Maybe<SuccessResponse>;
  adminCreateLabUser: SuccessResponse;
  adminCreateNews?: Maybe<SuccessResponse>;
  adminCreatePrintingFirm: SuccessResponse;
  adminCreateVolunteerKey: VolunteerKeyResponse;
  adminDeleteAdmin?: Maybe<SuccessResponse>;
  adminDeleteLabUser: SuccessResponse;
  adminDeleteNews: SuccessResponse;
  adminDeletePrintingFirm: SuccessResponse;
  adminDeleteVolunteerKey: VolunteerKeyResponse;
  adminForgotPassword: SuccessResponse;
  adminGenerateCertificate: SuccessResponse;
  adminLogin?: Maybe<AdminAuthPayload>;
  adminResetPassword: SuccessResponse;
  adminToggleVoucherStatus?: Maybe<Setting>;
  adminUpdateAdmin?: Maybe<SuccessResponse>;
  adminUpdateCommunication?: Maybe<Communication>;
  adminUpdateLabUser: SuccessResponse;
  adminUpdateModelRatingByID?: Maybe<ModelsRating>;
  adminUpdateNews: SuccessResponse;
  adminUpdatePassword: SuccessResponse;
  adminUpdatePrintingFirm: SuccessResponse;
  adminUpdateProductSignatureImgUrl?: Maybe<ProductSignature>;
  adminUpdateProfile?: Maybe<AdminAuthPayload>;
  adminUpdateSettings?: Maybe<Setting>;
  adminUpdateVolunteerKey: VolunteerKeyResponse;
  adminUpdateVoucherSettings?: Maybe<Setting>;
  clientCreatePrintingOrder?: Maybe<Success>;
  clientForgotPassword: SuccessResponse;
  clientGoToDashboard?: Maybe<ClientGoToDashboardType>;
  clientLogin: AuthPayload;
  clientRequestUpdateContact: SuccessResponse;
  clientResendOtp: SuccessResponse;
  clientResetPassword: SuccessResponse;
  clientResubmitApplication?: Maybe<ClientGResubmissionType>;
  clientSignup?: Maybe<SuccessResponse>;
  clientUpdateApplicantInfoById: SuccessResponse;
  clientUpdateLabReportById: Message;
  clientUpdateModelById: Message;
  clientUpdatePassword: SuccessResponse;
  clientUpdatePaymentById: Message;
  clientUpdateProfile?: Maybe<AuthPayload>;
  clientUpdateStepper?: Maybe<StepperResponse>;
  clientVerifyAndUpdateContact: SuccessResponse;
  clientVerifyAndUseVolunteerKey?: Maybe<VolunteerKeyResponse>;
  clientVerifyOtp: OtpVerificationResponse;
  labChangeLabReportStatus: SuccessResponse;
  labForgotPassword: SuccessResponse;
  labLogin: AuthPayload;
  labResetPassword: SuccessResponse;
  labUpdatePassword: SuccessResponse;
  labUpdateProfile?: Maybe<AuthPayload>;
  printingFirmChangePrintingOrderStatus: Success;
  printingFirmForgotPassword: SuccessResponse;
  printingFirmLogin: AuthPayload;
  printingFirmResetPassword: SuccessResponse;
  printingFirmUpdatePassword: SuccessResponse;
  printingFirmUpdateProfile?: Maybe<AuthPayload>;
};


export type MutationAdminAssignApplicantInfoArgs = {
  applicant_info_id: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAdminAssignModelInfoArgs = {
  fan_type?: InputMaybe<Scalars['String']['input']>;
  model_info_id: Scalars['String']['input'];
  remarks_comments?: InputMaybe<Scalars['String']['input']>;
  service_value?: InputMaybe<Scalars['String']['input']>;
  start_rating?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  sweep_size?: InputMaybe<Scalars['Float']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAdminAssignPrintingOrderArgs = {
  input: AdminAssignPrintingOrderInput;
};


export type MutationAdminAssignUserProductArgs = {
  user_id: Scalars['String']['input'];
  user_product_id: Scalars['String']['input'];
};


export type MutationAdminBatchCreateVolunteerKeysArgs = {
  input: BatchVolunteerKeyInput;
};


export type MutationAdminChangeApplicantStatusArgs = {
  applicantId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
};


export type MutationAdminChangeCompanyStatusArgs = {
  status: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
};


export type MutationAdminChangeModelStatusArgs = {
  fan_type?: InputMaybe<Scalars['String']['input']>;
  modelId: Scalars['String']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  remarks_comments?: InputMaybe<Scalars['String']['input']>;
  service_value?: InputMaybe<Scalars['String']['input']>;
  start_rating?: InputMaybe<Scalars['Float']['input']>;
  status: Scalars['String']['input'];
  sweep_size?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationAdminChangePaymentStatusArgs = {
  payment_id: Scalars['String']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
};


export type MutationAdminChangePrintingOrderStatusArgs = {
  input: AdminChangePrintingOrderStatusInput;
};


export type MutationAdminChangeUserProductStatusArgs = {
  reason?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
  userProductId: Scalars['ID']['input'];
};


export type MutationAdminCreateAdminArgs = {
  allowed_access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  allowed_products?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cnic: Scalars['String']['input'];
  country?: InputMaybe<Scalars['String']['input']>;
  designation?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  father_name?: InputMaybe<Scalars['String']['input']>;
  is_committee_head?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  organization?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  profile_picture?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAdminCreateLabUserArgs = {
  allowed_products?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cnic?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  father_name?: InputMaybe<Scalars['String']['input']>;
  lab_category?: InputMaybe<Scalars['String']['input']>;
  lab_expires?: InputMaybe<Scalars['String']['input']>;
  lab_origin?: InputMaybe<Scalars['String']['input']>;
  lab_type: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  profile_picture?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAdminCreateNewsArgs = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
};


export type MutationAdminCreatePrintingFirmArgs = {
  address?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cnic?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  father_name?: InputMaybe<Scalars['String']['input']>;
  mod_of_delivery?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  profile_picture?: InputMaybe<Scalars['String']['input']>;
  sticker_cost?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationAdminCreateVolunteerKeyArgs = {
  input: VolunteerKeyInput;
};


export type MutationAdminDeleteAdminArgs = {
  user_id: Scalars['ID']['input'];
};


export type MutationAdminDeleteLabUserArgs = {
  user_id: Scalars['ID']['input'];
};


export type MutationAdminDeleteNewsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAdminDeletePrintingFirmArgs = {
  user_id: Scalars['ID']['input'];
};


export type MutationAdminDeleteVolunteerKeyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAdminForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationAdminGenerateCertificateArgs = {
  modelId: Scalars['String']['input'];
};


export type MutationAdminLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationAdminResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationAdminToggleVoucherStatusArgs = {
  enabled: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationAdminUpdateAdminArgs = {
  input?: InputMaybe<AdminUpdateAdminInput>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAdminUpdateCommunicationArgs = {
  id: Scalars['ID']['input'];
  input: CommunicationInput;
};


export type MutationAdminUpdateLabUserArgs = {
  input: LabUserInput;
  user_id: Scalars['ID']['input'];
};


export type MutationAdminUpdateModelRatingByIdArgs = {
  Cost?: InputMaybe<Scalars['Float']['input']>;
  KWH?: InputMaybe<Scalars['Float']['input']>;
  Rating?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationAdminUpdateNewsArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAdminUpdatePasswordArgs = {
  confirmPassword: Scalars['String']['input'];
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationAdminUpdatePrintingFirmArgs = {
  input: PrintingFirmUserInput;
  user_id: Scalars['ID']['input'];
};


export type MutationAdminUpdateProductSignatureImgUrlArgs = {
  id: Scalars['String']['input'];
  img_url: Scalars['String']['input'];
};


export type MutationAdminUpdateProfileArgs = {
  cnic?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  father_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  profile_picture?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAdminUpdateSettingsArgs = {
  id: Scalars['ID']['input'];
  input: SettingInput;
};


export type MutationAdminUpdateVolunteerKeyArgs = {
  id: Scalars['ID']['input'];
  input: VolunteerKeyInput;
};


export type MutationAdminUpdateVoucherSettingsArgs = {
  id: Scalars['ID']['input'];
  status: Scalars['String']['input'];
  type: Scalars['String']['input'];
  validity: Scalars['String']['input'];
};


export type MutationClientCreatePrintingOrderArgs = {
  input: ClientCreatePrintingOrderInput;
};


export type MutationClientForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationClientGoToDashboardArgs = {
  product_id: Scalars['String']['input'];
};


export type MutationClientLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationClientRequestUpdateContactArgs = {
  newContact: Scalars['String']['input'];
};


export type MutationClientResendOtpArgs = {
  email: Scalars['String']['input'];
};


export type MutationClientResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationClientResubmitApplicationArgs = {
  product_id: Scalars['String']['input'];
};


export type MutationClientSignupArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationClientUpdateApplicantInfoByIdArgs = {
  data?: InputMaybe<UpdateApplicantInfoInput>;
  info_Id: Scalars['String']['input'];
};


export type MutationClientUpdateLabReportByIdArgs = {
  data: LabReportInput;
  report_id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationClientUpdateModelByIdArgs = {
  data: ModelInfoInput;
  model_id: Scalars['String']['input'];
};


export type MutationClientUpdatePasswordArgs = {
  confirmPassword: Scalars['String']['input'];
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationClientUpdatePaymentByIdArgs = {
  data: PaymentInput;
  payment_id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationClientUpdateProfileArgs = {
  applicantInfo?: InputMaybe<UpdateApplicantInfoInput>;
  userProfile?: InputMaybe<UpdateUserProfileInput>;
};


export type MutationClientUpdateStepperArgs = {
  action: Scalars['String']['input'];
  current_step: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
  stepper_type: Scalars['String']['input'];
  steps_info: Array<InputMaybe<StepInfoInput>>;
};


export type MutationClientVerifyAndUpdateContactArgs = {
  newContact: Scalars['String']['input'];
  otp: Scalars['String']['input'];
};


export type MutationClientVerifyAndUseVolunteerKeyArgs = {
  registrationKey: Scalars['String']['input'];
};


export type MutationClientVerifyOtpArgs = {
  email: Scalars['String']['input'];
  emailOtp: Scalars['String']['input'];
  phoneOtp: Scalars['String']['input'];
};


export type MutationLabChangeLabReportStatusArgs = {
  reason?: InputMaybe<Scalars['String']['input']>;
  reportId: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


export type MutationLabForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLabLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationLabResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationLabUpdatePasswordArgs = {
  confirmPassword: Scalars['String']['input'];
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationLabUpdateProfileArgs = {
  userProfile?: InputMaybe<UpdatelabProfileInput>;
};


export type MutationPrintingFirmChangePrintingOrderStatusArgs = {
  input: PrintingFirmChangePrintingOrderStatusInput;
};


export type MutationPrintingFirmForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationPrintingFirmLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationPrintingFirmResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationPrintingFirmUpdatePasswordArgs = {
  confirmPassword: Scalars['String']['input'];
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationPrintingFirmUpdateProfileArgs = {
  userProfile?: InputMaybe<UpdatePrintitingProfileInput>;
};

export type News = {
  __typename?: 'News';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type NewsPagination = {
  __typename?: 'NewsPagination';
  currentPage: Scalars['Int']['output'];
  news: Array<News>;
  totalCount: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type OtpVerificationResponse = {
  __typename?: 'OTPVerificationResponse';
  emailVerified: Scalars['Boolean']['output'];
  phoneVerified: Scalars['Boolean']['output'];
  status: Scalars['String']['output'];
};

export type OrderApplicant = {
  __typename?: 'OrderApplicant';
  company_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type Payment = {
  __typename?: 'Payment';
  amount?: Maybe<Scalars['Float']['output']>;
  demand_draft?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  modelinfo_id?: Maybe<Scalars['String']['output']>;
  pay_order_number?: Maybe<Scalars['String']['output']>;
  payment_date?: Maybe<Scalars['String']['output']>;
  payment_type?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type PaymentCounts = {
  __typename?: 'PaymentCounts';
  approved: Scalars['Float']['output'];
  pending?: Maybe<Scalars['Float']['output']>;
  rejected?: Maybe<Scalars['Float']['output']>;
  total: Scalars['Float']['output'];
};

export type PaymentFilterInput = {
  payment_type?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  applicant_info_id?: InputMaybe<Scalars['String']['input']>;
  demand_draft?: InputMaybe<Scalars['String']['input']>;
  pay_order_number?: InputMaybe<Scalars['String']['input']>;
  payment_date?: InputMaybe<Scalars['String']['input']>;
  payment_type?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentPagination = {
  __typename?: 'PaymentPagination';
  count?: Maybe<Scalars['Int']['output']>;
  currentPage?: Maybe<Scalars['Int']['output']>;
  payments?: Maybe<Array<Maybe<AdminPayment>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PaymentResponse = {
  __typename?: 'PaymentResponse';
  count: Scalars['Int']['output'];
  currentPage: Scalars['Int']['output'];
  payments: Array<Payment>;
  totalPages: Scalars['Int']['output'];
};

export type PaymentSummary = {
  __typename?: 'PaymentSummary';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  demand_draft?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  pay_order_number?: Maybe<Scalars['String']['output']>;
  payment_date?: Maybe<Scalars['String']['output']>;
  payment_type?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PaymentWithModelInfo = {
  __typename?: 'PaymentWithModelInfo';
  model_info?: Maybe<ModelInfo>;
  payment?: Maybe<Payment>;
};

export type PrintingCompaniesPaginated = {
  __typename?: 'PrintingCompaniesPaginated';
  count?: Maybe<Scalars['Int']['output']>;
  currentPage?: Maybe<Scalars['Int']['output']>;
  printingFirms?: Maybe<Array<Maybe<FirmUser>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PrintingFirm = {
  __typename?: 'PrintingFirm';
  cnic?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  father_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  profile_picture?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PrintingFirmChangePrintingOrderStatusInput = {
  delivery_company_name?: InputMaybe<Scalars['String']['input']>;
  printing_order_id: Scalars['String']['input'];
  status: Scalars['String']['input'];
  tracking_id?: InputMaybe<Scalars['String']['input']>;
};

export type PrintingFirmUserInput = {
  address?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cnic?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  father_name?: InputMaybe<Scalars['String']['input']>;
  mod_of_delivery?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  profile_picture?: InputMaybe<Scalars['String']['input']>;
  sticker_cost?: InputMaybe<Scalars['Float']['input']>;
};

export type PrintingModelRating = {
  __typename?: 'PrintingModelRating';
  Cost: Scalars['Float']['output'];
  KWH: Scalars['Float']['output'];
  Name: Scalars['String']['output'];
  Rating: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
};

export type PrintingOrder = {
  __typename?: 'PrintingOrder';
  ApplicantInfo?: Maybe<OrderApplicant>;
  Payments?: Maybe<Array<Maybe<Payment>>>;
  Seller?: Maybe<SellerDetails>;
  StickerOrders?: Maybe<Array<Maybe<StickerOrder>>>;
  address?: Maybe<Scalars['String']['output']>;
  buyer_id?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  delivery_company_name?: Maybe<Scalars['String']['output']>;
  delivery_type?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  product_id?: Maybe<Scalars['String']['output']>;
  seller_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total_price?: Maybe<Scalars['Float']['output']>;
  total_quantity?: Maybe<Scalars['Int']['output']>;
  tracking_id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type PrintingOrderFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type PrintingOrderPagination = {
  __typename?: 'PrintingOrderPagination';
  count: Scalars['Int']['output'];
  currentPage: Scalars['Int']['output'];
  orders: Array<PrintingOrder>;
  totalPages: Scalars['Int']['output'];
};

export type PrintingSetting = {
  __typename?: 'PrintingSetting';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Product = {
  __typename?: 'Product';
  count?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  steppers?: Maybe<Array<Maybe<Stepper>>>;
};

export type ProductPaginatedResponse = {
  __typename?: 'ProductPaginatedResponse';
  count?: Maybe<Scalars['Int']['output']>;
  currentPage?: Maybe<Scalars['Int']['output']>;
  products?: Maybe<Array<Maybe<UserProduct>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ProductRevenue = {
  __typename?: 'ProductRevenue';
  product_name: Scalars['String']['output'];
  totalRevenue: Scalars['Float']['output'];
  transactionCount: Scalars['Int']['output'];
};

export type ProductRevenueFilter = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};

export type ProductSignature = {
  __typename?: 'ProductSignature';
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  img_url?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type PublicCertificate = {
  __typename?: 'PublicCertificate';
  ApplicantInfo?: Maybe<CertificateApplicantInfo>;
  ModelInfo?: Maybe<CertificateModelInfo>;
  Product?: Maybe<CertificateProduct>;
  User?: Maybe<CertificateUser>;
  createdAt?: Maybe<Scalars['String']['output']>;
  expiry_date?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type PublicCertificateApplicantInfo = {
  __typename?: 'PublicCertificateApplicantInfo';
  comapny_country?: Maybe<Scalars['String']['output']>;
  company_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type PublicCertificateModelInfo = {
  __typename?: 'PublicCertificateModelInfo';
  colour?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  model_name?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
};

export type PublicCertificateProduct = {
  __typename?: 'PublicCertificateProduct';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type PublicCertificateUser = {
  __typename?: 'PublicCertificateUser';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type PublicModelInfo = {
  __typename?: 'PublicModelInfo';
  ac?: Maybe<Ac>;
  fan?: Maybe<Fan>;
  id?: Maybe<Scalars['ID']['output']>;
  ledLight?: Maybe<LedLight>;
  model_name?: Maybe<Scalars['String']['output']>;
  motor?: Maybe<Motor>;
  product_id?: Maybe<Scalars['String']['output']>;
  refrigerator?: Maybe<Refrigerator>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type PublicModelInfoFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type PublicModelInfoResponse = {
  __typename?: 'PublicModelInfoResponse';
  count: Scalars['Int']['output'];
  currentPage: Scalars['Int']['output'];
  models: Array<PublicModelInfo>;
  totalPages: Scalars['Int']['output'];
};

export type PublicModelInfoWithDetails = {
  __typename?: 'PublicModelInfoWithDetails';
  certificates?: Maybe<Array<Maybe<Certificate>>>;
  labReports?: Maybe<Array<Maybe<LabReport>>>;
  modelInfo?: Maybe<PublicModelInfo>;
  payments: Array<Payment>;
};

export type PublicProduct = {
  __typename?: 'PublicProduct';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type PublicProductResponse = {
  __typename?: 'PublicProductResponse';
  products?: Maybe<Array<Maybe<PublicProduct>>>;
};

export type Query = {
  __typename?: 'Query';
  ClientGetCertificateById?: Maybe<Certificate>;
  PublicVerifyCertificate?: Maybe<Certificate>;
  adminGetAdminById?: Maybe<UserById>;
  adminGetAllAdmins?: Maybe<AdminsPaginated>;
  adminGetAllApplicants: ApplicantInfoPagination;
  adminGetAllCommunications: CommunicationsResponse;
  adminGetAllCompanies: CompanyResponse;
  adminGetAllLabs?: Maybe<LabsPaginated>;
  adminGetAllModels: ModelPagination;
  adminGetAllModelsRatings?: Maybe<Array<Maybe<ModelsRating>>>;
  adminGetAllNews: NewsPagination;
  adminGetAllPayments: PaymentPagination;
  adminGetAllPrintingCompanies?: Maybe<PrintingCompaniesPaginated>;
  adminGetAllPrintingOrders: AdminGetAllPrintingOrdersResult;
  adminGetAllProductSignatures?: Maybe<Array<Maybe<ProductSignature>>>;
  adminGetAllProducts?: Maybe<AdminGetProducts>;
  adminGetAllReportApplicants: ReportApplicantPagination;
  adminGetAllReportModels: ReportModelPagination;
  adminGetAllReportOrders: ReportOrderPagination;
  adminGetAllReportPayments: ReportPaymentPagination;
  adminGetAllSettings: Array<Maybe<Setting>>;
  adminGetAllUserProducts?: Maybe<ProductPaginatedResponse>;
  adminGetAllVolunteerKeys: VolunteerKeyListResponse;
  adminGetApplicantInfoById?: Maybe<ApplicantInfoWithLogs>;
  adminGetCommitteeMembers?: Maybe<Array<Maybe<AdminUser>>>;
  adminGetDashboard: AdminDashboardData;
  adminGetLabById?: Maybe<UserById>;
  adminGetModelById?: Maybe<ModelInfoWithDetails>;
  adminGetModelRatingByID?: Maybe<ModelsRating>;
  adminGetNewsById?: Maybe<News>;
  adminGetPaymentById?: Maybe<AdminGetPaymentByIdResponse>;
  adminGetPrintingCompanyById?: Maybe<FirmUser>;
  adminGetPrintingOrderById: AdminGetPrintingOrderByIdResult;
  adminGetProductRevenueReport?: Maybe<Array<Maybe<ProductRevenue>>>;
  adminGetProductSignature?: Maybe<ProductSignature>;
  adminGetReportApplicationMetrics: ApplicationMetrics;
  adminGetReportRevenueSummaryReport: RevenueSummary;
  adminGetRevenueByManufacturerReport?: Maybe<Array<Maybe<ManufacturerRevenue>>>;
  adminGetSettingsById?: Maybe<Setting>;
  adminGetUserProductById?: Maybe<UserProductWithDetails>;
  adminGetVolunteerKeyById?: Maybe<VolunteerKeyType>;
  adminProfile?: Maybe<AdminUser>;
  clientGetAllLabs: Array<Maybe<User>>;
  clientGetAllModelSignatures?: Maybe<Array<Maybe<ModelSignature>>>;
  clientGetAllNews: ClientNewsPagination;
  clientGetAllPayments: PaymentResponse;
  clientGetAllPrintingFirms: Array<User>;
  clientGetApplicantInfoByProductId?: Maybe<ApplicantInfo>;
  clientGetDashboard: DashboardData;
  clientGetDropDownModels: Array<ModelInfo>;
  clientGetModelById: ModelInfoWithPayments;
  clientGetModelSignature?: Maybe<ModelSignature>;
  clientGetModels: ModelInfoResponse;
  clientGetNewsById?: Maybe<ClientNews>;
  clientGetPaymentById: PaymentWithModelInfo;
  clientGetPrintingOrderById?: Maybe<ClientGetPrintingOrderByIdResult>;
  clientGetPrintingOrders?: Maybe<PrintingOrderPagination>;
  clientGetProducts: Array<Product>;
  clientGetProfile?: Maybe<UserProfile>;
  clientGetSettingsByKey?: Maybe<Setting>;
  clientGetStatus: GetStatusRepsonse;
  clientGetStepper?: Maybe<StepperResponse>;
  clientGetgetAllCertificates?: Maybe<CertificatePagination>;
  labGetAllReports?: Maybe<LabReportPagination>;
  labGetProfile?: Maybe<LabUser>;
  labGetReportById?: Maybe<LabReport>;
  printingFirmGGetAllSettings: Array<Maybe<PrintingSetting>>;
  printingFirmGetAllModelsRatings?: Maybe<Array<Maybe<PrintingModelRating>>>;
  printingFirmGetPrintingOrderById: PrintingOrder;
  printingFirmGetPrintingOrders?: Maybe<PrintingOrderPagination>;
  printingFirmGetProfile?: Maybe<PrintingFirm>;
  printingFirmGetSerialNumbers: Array<Scalars['String']['output']>;
  publicGetAllModels: PublicModelInfoResponse;
  publicGetAllNews: PublicNewsPagination;
  publicGetAllProducts: PublicProductResponse;
  publicGetModelById: PublicModelInfoWithDetails;
  publicGetNewsById?: Maybe<PublicNews>;
  publicVerifySticker: VerifyStickerResponse;
};


export type QueryClientGetCertificateByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryPublicVerifyCertificateArgs = {
  id: Scalars['String']['input'];
};


export type QueryAdminGetAdminByIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminGetAllAdminsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminGetAllApplicantsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminGetAllCommunicationsArgs = {
  filter?: InputMaybe<CommunicationFilterInput>;
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};


export type QueryAdminGetAllCompaniesArgs = {
  filter?: InputMaybe<CompanyFilterInput>;
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminGetAllLabsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminGetAllModelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminGetAllNewsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminGetAllPaymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminGetAllPrintingCompaniesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminGetAllPrintingOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminGetAllReportApplicantsArgs = {
  dateRange?: InputMaybe<DateRangeInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminGetAllReportModelsArgs = {
  dateRange?: InputMaybe<DateRangeInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminGetAllReportOrdersArgs = {
  dateRange?: InputMaybe<DateRangeInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminGetAllReportPaymentsArgs = {
  dateRange?: InputMaybe<DateRangeInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  payment_type?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminGetAllUserProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminGetApplicantInfoByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryAdminGetDashboardArgs = {
  product_id: Scalars['ID']['input'];
};


export type QueryAdminGetLabByIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminGetModelByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryAdminGetModelRatingByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAdminGetNewsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryAdminGetPaymentByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryAdminGetPrintingCompanyByIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminGetPrintingOrderByIdArgs = {
  order_id: Scalars['String']['input'];
};


export type QueryAdminGetProductRevenueReportArgs = {
  filters?: InputMaybe<ProductRevenueFilter>;
};


export type QueryAdminGetProductSignatureArgs = {
  id: Scalars['String']['input'];
};


export type QueryAdminGetReportApplicationMetricsArgs = {
  filters?: InputMaybe<ApplicationMetricsFilter>;
};


export type QueryAdminGetReportRevenueSummaryReportArgs = {
  filters?: InputMaybe<RevenueSummaryFilter>;
};


export type QueryAdminGetRevenueByManufacturerReportArgs = {
  filters?: InputMaybe<ManufacturerRevenueFilter>;
};


export type QueryAdminGetSettingsByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAdminGetUserProductByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryAdminGetVolunteerKeyByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryClientGetAllLabsArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  lab_category?: InputMaybe<Scalars['String']['input']>;
  lab_origin?: InputMaybe<Scalars['String']['input']>;
  lab_type?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryClientGetAllNewsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryClientGetAllPaymentsArgs = {
  filter?: InputMaybe<PaymentFilterInput>;
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  product_id: Scalars['String']['input'];
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryClientGetApplicantInfoByProductIdArgs = {
  product_id: Scalars['String']['input'];
};


export type QueryClientGetDashboardArgs = {
  product_id: Scalars['String']['input'];
};


export type QueryClientGetDropDownModelsArgs = {
  product_id: Scalars['String']['input'];
};


export type QueryClientGetModelByIdArgs = {
  model_id: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
};


export type QueryClientGetModelSignatureArgs = {
  id: Scalars['String']['input'];
};


export type QueryClientGetModelsArgs = {
  filter?: InputMaybe<ModelInfoFilterInput>;
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  product_id: Scalars['String']['input'];
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryClientGetNewsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryClientGetPaymentByIdArgs = {
  payment_id: Scalars['String']['input'];
};


export type QueryClientGetPrintingOrderByIdArgs = {
  order_id: Scalars['String']['input'];
};


export type QueryClientGetPrintingOrdersArgs = {
  filter?: InputMaybe<PrintingOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  product_id: Scalars['String']['input'];
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryClientGetSettingsByKeyArgs = {
  key: Scalars['String']['input'];
};


export type QueryClientGetStatusArgs = {
  product_id: Scalars['String']['input'];
};


export type QueryClientGetStepperArgs = {
  product_id: Scalars['String']['input'];
  stepper_type: Scalars['String']['input'];
};


export type QueryClientGetgetAllCertificatesArgs = {
  filter?: InputMaybe<CertificateFilterInput>;
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  product_id: Scalars['String']['input'];
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLabGetAllReportsArgs = {
  filter?: InputMaybe<LabReportFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLabGetReportByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPrintingFirmGetPrintingOrderByIdArgs = {
  order_id: Scalars['String']['input'];
};


export type QueryPrintingFirmGetPrintingOrdersArgs = {
  filter?: InputMaybe<PrintingOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPrintingFirmGetSerialNumbersArgs = {
  printingOrderId: Scalars['ID']['input'];
};


export type QueryPublicGetAllModelsArgs = {
  filter?: InputMaybe<PublicModelInfoFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  product_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPublicGetAllNewsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPublicGetModelByIdArgs = {
  model_id: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
};


export type QueryPublicGetNewsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryPublicVerifyStickerArgs = {
  qr: Scalars['String']['input'];
};

export type Refrigerator = {
  __typename?: 'Refrigerator';
  annual_energy_consumption?: Maybe<Scalars['Float']['output']>;
  brand_name?: Maybe<Scalars['String']['output']>;
  colors?: Maybe<Scalars['String']['output']>;
  energy_efficiency_features?: Maybe<Scalars['String']['output']>;
  kw_rating?: Maybe<Scalars['Float']['output']>;
  manufacture_date?: Maybe<Scalars['String']['output']>;
  model_info_id?: Maybe<Scalars['String']['output']>;
  model_name?: Maybe<Scalars['String']['output']>;
  origin_country?: Maybe<Scalars['String']['output']>;
  ps_mark?: Maybe<Scalars['Boolean']['output']>;
  refrigerant_type?: Maybe<Scalars['String']['output']>;
  specify_number?: Maybe<Scalars['String']['output']>;
  total_volume_litres?: Maybe<Scalars['Int']['output']>;
};

export type ReportApplicantInfo = {
  __typename?: 'ReportApplicantInfo';
  company_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ReportApplicantPagination = {
  __typename?: 'ReportApplicantPagination';
  applicants?: Maybe<Array<Maybe<ReportApplicants>>>;
  count?: Maybe<Scalars['Int']['output']>;
  currentPage?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ReportApplicants = {
  __typename?: 'ReportApplicants';
  Product?: Maybe<ReportProduct>;
  company_name?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ReportModelInfo = {
  __typename?: 'ReportModelInfo';
  ApplicantInfo?: Maybe<ReportApplicantInfo>;
  Payments?: Maybe<Array<Maybe<ReportModelPayment>>>;
  Product?: Maybe<ReportProduct>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  model_name?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type ReportModelPagination = {
  __typename?: 'ReportModelPagination';
  count?: Maybe<Scalars['Int']['output']>;
  currentPage?: Maybe<Scalars['Int']['output']>;
  models?: Maybe<Array<Maybe<ReportModelInfo>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ReportModelPayment = {
  __typename?: 'ReportModelPayment';
  amount?: Maybe<Scalars['Float']['output']>;
};

export type ReportOrderPagination = {
  __typename?: 'ReportOrderPagination';
  count?: Maybe<Scalars['Int']['output']>;
  currentPage?: Maybe<Scalars['Int']['output']>;
  orders?: Maybe<Array<Maybe<ReportOrders>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ReportOrders = {
  __typename?: 'ReportOrders';
  ApplicantInfo?: Maybe<ReportApplicantInfo>;
  Product?: Maybe<ReportProduct>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total_price?: Maybe<Scalars['Float']['output']>;
  total_quantity?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ReportPayment = {
  __typename?: 'ReportPayment';
  ApplicantInfo?: Maybe<ReportApplicantInfo>;
  PrintingOrder?: Maybe<ReportPaymentOrders>;
  Product?: Maybe<ReportProduct>;
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  payment_date?: Maybe<Scalars['String']['output']>;
  payment_type?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ReportPaymentOrders = {
  __typename?: 'ReportPaymentOrders';
  id?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ReportPaymentPagination = {
  __typename?: 'ReportPaymentPagination';
  count?: Maybe<Scalars['Int']['output']>;
  currentPage?: Maybe<Scalars['Int']['output']>;
  payments?: Maybe<Array<Maybe<ReportPayment>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ReportProduct = {
  __typename?: 'ReportProduct';
  name?: Maybe<Scalars['String']['output']>;
};

export type RevenueSummary = {
  __typename?: 'RevenueSummary';
  dateRange?: Maybe<DateRange>;
  labelPrintingFee?: Maybe<Scalars['Float']['output']>;
  modelRegistrationFee?: Maybe<Scalars['Float']['output']>;
  productRegistrationFee?: Maybe<Scalars['Float']['output']>;
  totalRevenue?: Maybe<Scalars['Float']['output']>;
};

export type RevenueSummaryFilter = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  revenueType?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Seller = {
  __typename?: 'Seller';
  name?: Maybe<Scalars['String']['output']>;
};

export type SellerDetails = {
  __typename?: 'SellerDetails';
  address?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mod_of_delivery?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Setting = {
  __typename?: 'Setting';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  value: Scalars['String']['output'];
  voucher_enabled?: Maybe<Scalars['Boolean']['output']>;
  voucher_imageurl?: Maybe<Scalars['String']['output']>;
  voucher_status?: Maybe<Scalars['String']['output']>;
  voucher_type?: Maybe<Scalars['String']['output']>;
  voucher_validity?: Maybe<Scalars['String']['output']>;
};

export type SettingInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
  voucher_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  voucher_imageurl?: InputMaybe<Scalars['String']['input']>;
  voucher_status?: InputMaybe<Scalars['String']['input']>;
  voucher_type?: InputMaybe<Scalars['String']['input']>;
  voucher_validity?: InputMaybe<Scalars['String']['input']>;
};

export type StepInfo = {
  __typename?: 'StepInfo';
  applicantInfo?: Maybe<ApplicantInfo>;
  labReport?: Maybe<LabReport>;
  modelInfo?: Maybe<ModelInfo>;
  payment?: Maybe<Array<Maybe<Payment>>>;
};

export type StepInfoInput = {
  applicantInfo?: InputMaybe<ApplicantInfoInput>;
  labReport?: InputMaybe<LabReportInput>;
  modelInfo?: InputMaybe<ModelInfoInput>;
  payment?: InputMaybe<Array<InputMaybe<PaymentInput>>>;
};

export type Stepper = {
  __typename?: 'Stepper';
  current_step: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product_id: Scalars['String']['output'];
  stepper_type: Scalars['String']['output'];
  steps_info?: Maybe<Array<Maybe<StepInfo>>>;
  user_id: Scalars['String']['output'];
};

export type StepperResponse = {
  __typename?: 'StepperResponse';
  count?: Maybe<Scalars['Int']['output']>;
  current_step?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  message: Scalars['String']['output'];
  product_id?: Maybe<Scalars['String']['output']>;
  stepper_type?: Maybe<Scalars['String']['output']>;
  steps_info?: Maybe<Array<Maybe<StepInfo>>>;
  success: Scalars['Boolean']['output'];
};

export type StickerOrder = {
  __typename?: 'StickerOrder';
  ModelInfo?: Maybe<ModelInfo>;
  created_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  model_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  printing_id?: Maybe<Scalars['String']['output']>;
  qr?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type StickerOrderInput = {
  model_info_id: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type Success = {
  __typename?: 'Success';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type UpdateApplicantInfoInput = {
  company_address?: InputMaybe<Scalars['String']['input']>;
  company_city?: InputMaybe<Scalars['String']['input']>;
  company_country?: InputMaybe<Scalars['String']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  company_province?: InputMaybe<Scalars['String']['input']>;
  contact_person_email?: InputMaybe<Scalars['String']['input']>;
  contact_person_name?: InputMaybe<Scalars['String']['input']>;
  contact_person_phone?: InputMaybe<Scalars['String']['input']>;
  contact_person_telephone?: InputMaybe<Scalars['String']['input']>;
  factory_address?: InputMaybe<Scalars['String']['input']>;
  factory_city?: InputMaybe<Scalars['String']['input']>;
  factory_country?: InputMaybe<Scalars['String']['input']>;
  factory_province?: InputMaybe<Scalars['String']['input']>;
  factory_telephone?: InputMaybe<Scalars['String']['input']>;
  member_of_association?: InputMaybe<Scalars['Boolean']['input']>;
  membership_name?: InputMaybe<Scalars['String']['input']>;
  membership_number?: InputMaybe<Scalars['String']['input']>;
  membership_year?: InputMaybe<Scalars['String']['input']>;
  office_managing_director_name?: InputMaybe<Scalars['String']['input']>;
  office_telephone?: InputMaybe<Scalars['String']['input']>;
  registered_with_chamber?: InputMaybe<Scalars['Boolean']['input']>;
  registration_number?: InputMaybe<Scalars['String']['input']>;
  registration_year?: InputMaybe<Scalars['String']['input']>;
  sales_network_regions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdatePrintitingProfileInput = {
  cnic?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  father_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  profile_picture?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserProfileInput = {
  cnic?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  father_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  profile_picture?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatelabProfileInput = {
  cnic?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  father_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  profile_picture?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  cnic?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  father_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lab_type?: Maybe<Scalars['String']['output']>;
  mod_of_delivery?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  profile_picture?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  sticker_cost?: Maybe<Scalars['Float']['output']>;
};

export type UserById = {
  __typename?: 'UserByID';
  allowed_access?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  allowed_products?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  cnic?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  designation?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  father_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_committee_head?: Maybe<Scalars['Boolean']['output']>;
  is_md?: Maybe<Scalars['Boolean']['output']>;
  lab_category?: Maybe<Scalars['String']['output']>;
  lab_expires?: Maybe<Scalars['String']['output']>;
  lab_origin?: Maybe<Scalars['String']['output']>;
  lab_type?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  profile_picture?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  sticker_cost?: Maybe<Scalars['Float']['output']>;
};

export type UserProduct = {
  __typename?: 'UserProduct';
  AssignBy?: Maybe<UserUserProduct>;
  AssignTo?: Maybe<UserUserProduct>;
  Product?: Maybe<AdminProduct>;
  RegisteredBy?: Maybe<UserUserProduct>;
  id?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserProductWithDetails = {
  __typename?: 'UserProductWithDetails';
  actionLogs?: Maybe<Array<Maybe<ActionLog>>>;
  payments?: Maybe<Payment>;
  userProduct?: Maybe<UserProduct>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  applicantInfo?: Maybe<ApplicantInfo>;
  user?: Maybe<User>;
};

export type UserUserProduct = {
  __typename?: 'UserUserProduct';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type VerifyStickerResponse = {
  __typename?: 'VerifyStickerResponse';
  message: Scalars['String']['output'];
  qr_count: Scalars['Int']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
  success: Scalars['Boolean']['output'];
};

export type VolunteerKey = {
  __typename?: 'VolunteerKey';
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  maxUseCount?: Maybe<Scalars['Int']['output']>;
  registrationKey?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  usedBy?: Maybe<Scalars['String']['output']>;
  usedCount?: Maybe<Scalars['Int']['output']>;
};

export type VolunteerKeyInput = {
  maxUseCount: Scalars['Int']['input'];
  registrationKey: Scalars['String']['input'];
};

export type VolunteerKeyListResponse = {
  __typename?: 'VolunteerKeyListResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  volunteerKeys: Array<VolunteerKeyType>;
};

export type VolunteerKeyResponse = {
  __typename?: 'VolunteerKeyResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  volunteerKey?: Maybe<VolunteerKeyType>;
};

export type VolunteerKeyType = {
  __typename?: 'VolunteerKeyType';
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  max_use_count?: Maybe<Scalars['Int']['output']>;
  registration_key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  usedBy?: Maybe<Scalars['String']['output']>;
  used_count?: Maybe<Scalars['Int']['output']>;
};

export type PublicNews = {
  __typename?: 'publicNews';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type PublicNewsPagination = {
  __typename?: 'publicNewsPagination';
  currentPage: Scalars['Int']['output'];
  news: Array<News>;
  totalCount: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type UserProduct = {
  __typename?: 'userProduct';
  id: Scalars['ID']['output'];
  product_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type ClientUpdateStepperMutationVariables = Exact<{
  productId: Scalars['String']['input'];
  action: Scalars['String']['input'];
  currentStep: Scalars['String']['input'];
  stepperType: Scalars['String']['input'];
  stepsInfo: Array<InputMaybe<StepInfoInput>> | InputMaybe<StepInfoInput>;
}>;


export type ClientUpdateStepperMutation = { __typename?: 'Mutation', clientUpdateStepper?: { __typename?: 'StepperResponse', id?: string | null, count?: number | null, success: boolean, message: string, product_id?: string | null, stepper_type?: string | null, current_step?: string | null, steps_info?: Array<{ __typename?: 'StepInfo', labReport?: { __typename?: 'LabReport', id?: string | null, user_id?: string | null, lab_id?: string | null, product_id?: string | null, model_info_id?: string | null, test_report?: string | null, report_from?: string | null, lab_country?: string | null, lab_user_name?: string | null, status?: string | null, reason?: string | null, createdAt?: string | null, updatedAt?: string | null, lab?: { __typename?: 'LabUser', id: string, name?: string | null, email?: string | null, father_name?: string | null, country?: string | null, cnic?: string | null, phone?: string | null, profile_picture?: string | null, lab_type?: string | null, lab_origin?: string | null, lab_category?: string | null, lab_expires?: string | null, role?: string | null, status?: string | null, allowed_products?: Array<string | null> | null } | null, user?: { __typename?: 'LabUser', id: string, name?: string | null, email?: string | null, father_name?: string | null, country?: string | null, cnic?: string | null, phone?: string | null, profile_picture?: string | null, lab_type?: string | null, lab_origin?: string | null, lab_category?: string | null, lab_expires?: string | null, role?: string | null, status?: string | null, allowed_products?: Array<string | null> | null } | null, Product?: { __typename?: 'AdminProduct', id?: string | null, name?: string | null, description?: string | null, image?: string | null } | null } | null, applicantInfo?: { __typename?: 'ApplicantInfo', id?: string | null, user_id?: string | null, assign_to?: string | null, assign_by?: string | null, status?: string | null, product_id?: string | null, company_name?: string | null, company_address?: string | null, company_country?: string | null, company_province?: string | null, company_city?: string | null, factory_telephone?: string | null, factory_address?: string | null, factory_country?: string | null, factory_province?: string | null, factory_city?: string | null, office_telephone?: string | null, office_managing_director_name?: string | null, contact_person_name?: string | null, contact_person_phone?: string | null, contact_person_telephone?: string | null, contact_person_email?: string | null, registered_with_chamber?: boolean | null, user_agreement?: boolean | null, registration_number?: string | null, registration_year?: string | null, member_of_association?: boolean | null, membership_name?: string | null, membership_number?: string | null, membership_year?: string | null, sales_network_regions?: Array<string | null> | null, company_brochure?: string | null, product_brochure?: string | null, createdAt?: string | null, updatedAt?: string | null, reason?: string | null } | null, modelInfo?: { __typename?: 'ModelInfo', id?: string | null, user_id?: string | null, product_id?: string | null, model_name?: string | null, estimated_production_per_anum?: string | null, status?: string | null, service_value?: string | null, start_rating?: number | null, remarks_comments?: string | null, createdAt?: string | null, is_certificate_generated?: boolean | null, fan_type?: string | null, sweep_size?: number | null, refrigerator?: { __typename?: 'Refrigerator', model_info_id?: string | null, brand_name?: string | null, model_name?: string | null, manufacture_date?: string | null, origin_country?: string | null, kw_rating?: number | null, annual_energy_consumption?: number | null, total_volume_litres?: number | null, refrigerant_type?: string | null, colors?: string | null, ps_mark?: boolean | null, specify_number?: string | null, energy_efficiency_features?: string | null } | null, motor?: { __typename?: 'Motor', model_info_id?: string | null, manufacturer_name?: string | null, country_of_manufacture?: string | null, brand_name?: string | null, first_manufactured_year?: number | null, model_number?: string | null, replaces_other_model?: boolean | null, date_marked?: boolean | null, website_url?: string | null, phase_type?: string | null, rated_power_output?: number | null, rated_voltage?: number | null, rated_frequency?: number | null, number_of_poles?: number | null, rated_speed?: number | null, motor_duty?: string | null, mounting_code?: string | null, frame_code?: string | null, enclosure_rating?: string | null, motor_design?: string | null, motor_insulation?: string | null, state_model?: string | null, date_format?: string | null } | null, ledLight?: { __typename?: 'LEDLight', model_info_id?: string | null, brand_name?: string | null, model_number?: string | null, bar_code?: string | null, lamp_type?: string | null, country_of_origin?: string | null, manufacture_date?: string | null, lamp_length?: number | null, max_diameter?: number | null, min_voltage?: number | null, max_voltage?: number | null, rated_frequency?: number | null, rated_power?: number | null, power_factor?: number | null, standby_power?: number | null, flux?: number | null, efficacy?: number | null, color_temperature?: number | null, chromaticity_tolerance?: number | null, color_rendering_index?: number | null, rated_lifetime?: number | null, mercury_content?: number | null, risk_group?: string | null, warranty_years?: number | null } | null, fan?: { __typename?: 'Fan', id: string, model_info_id: string, model_name?: string | null, rating?: string | null, size_capacity?: number | null, colors?: string | null, ps_mark?: boolean | null, specify_number?: string | null, energy_efficiency_features?: string | null } | null, ac?: { __typename?: 'AC', id: string, model_info_id: string, brand_name?: string | null, model_name?: string | null, manufacture_date?: string | null, origin_country?: string | null, kw_rating?: number | null, annual_energy_consumption?: number | null, cooling_capacity?: string | null, refrigerant_type?: string | null, colors?: string | null, ps_mark?: boolean | null, specify_number?: string | null, energy_efficiency_features?: string | null } | null } | null, payment?: Array<{ __typename?: 'Payment', id?: string | null, user_id?: string | null, product_id?: string | null, modelinfo_id?: string | null, payment_type?: string | null, amount?: number | null, payment_date?: string | null, pay_order_number?: string | null, demand_draft?: string | null, status?: string | null } | null> | null } | null> | null } | null };

export type ClientVerifyOtpMutationVariables = Exact<{
  email: Scalars['String']['input'];
  phoneOtp: Scalars['String']['input'];
  emailOtp: Scalars['String']['input'];
}>;


export type ClientVerifyOtpMutation = { __typename?: 'Mutation', clientVerifyOtp: { __typename?: 'OTPVerificationResponse', phoneVerified: boolean, emailVerified: boolean, status: string } };

export type ClientGetStepperQueryVariables = Exact<{
  productId: Scalars['String']['input'];
  stepperType: Scalars['String']['input'];
}>;


export type ClientGetStepperQuery = { __typename?: 'Query', clientGetStepper?: { __typename?: 'StepperResponse', id?: string | null, count?: number | null, success: boolean, message: string, product_id?: string | null, stepper_type?: string | null, current_step?: string | null, steps_info?: Array<{ __typename?: 'StepInfo', labReport?: { __typename?: 'LabReport', id?: string | null, user_id?: string | null, lab_id?: string | null, product_id?: string | null, model_info_id?: string | null, test_report?: string | null, report_from?: string | null, lab_country?: string | null, lab_user_name?: string | null, status?: string | null, reason?: string | null, createdAt?: string | null, updatedAt?: string | null, lab?: { __typename?: 'LabUser', id: string, name?: string | null, email?: string | null, father_name?: string | null, country?: string | null, cnic?: string | null, phone?: string | null, profile_picture?: string | null, lab_type?: string | null, lab_origin?: string | null, lab_category?: string | null, lab_expires?: string | null, role?: string | null, status?: string | null, allowed_products?: Array<string | null> | null } | null, user?: { __typename?: 'LabUser', id: string, name?: string | null, email?: string | null, father_name?: string | null, country?: string | null, cnic?: string | null, phone?: string | null, profile_picture?: string | null, lab_type?: string | null, lab_origin?: string | null, lab_category?: string | null, lab_expires?: string | null, role?: string | null, status?: string | null, allowed_products?: Array<string | null> | null } | null, Product?: { __typename?: 'AdminProduct', id?: string | null, name?: string | null, description?: string | null, image?: string | null } | null } | null, applicantInfo?: { __typename?: 'ApplicantInfo', id?: string | null, user_id?: string | null, assign_to?: string | null, assign_by?: string | null, status?: string | null, product_id?: string | null, company_name?: string | null, company_address?: string | null, company_country?: string | null, company_province?: string | null, company_city?: string | null, factory_telephone?: string | null, factory_address?: string | null, factory_country?: string | null, factory_province?: string | null, factory_city?: string | null, office_telephone?: string | null, office_managing_director_name?: string | null, contact_person_name?: string | null, contact_person_phone?: string | null, contact_person_telephone?: string | null, contact_person_email?: string | null, registered_with_chamber?: boolean | null, user_agreement?: boolean | null, registration_number?: string | null, registration_year?: string | null, member_of_association?: boolean | null, membership_name?: string | null, membership_number?: string | null, membership_year?: string | null, sales_network_regions?: Array<string | null> | null, company_brochure?: string | null, product_brochure?: string | null, createdAt?: string | null, updatedAt?: string | null, reason?: string | null } | null, modelInfo?: { __typename?: 'ModelInfo', id?: string | null, user_id?: string | null, product_id?: string | null, model_name?: string | null, estimated_production_per_anum?: string | null, status?: string | null, service_value?: string | null, start_rating?: number | null, remarks_comments?: string | null, createdAt?: string | null, is_certificate_generated?: boolean | null, fan_type?: string | null, sweep_size?: number | null, refrigerator?: { __typename?: 'Refrigerator', model_info_id?: string | null, brand_name?: string | null, model_name?: string | null, manufacture_date?: string | null, origin_country?: string | null, kw_rating?: number | null, annual_energy_consumption?: number | null, total_volume_litres?: number | null, refrigerant_type?: string | null, colors?: string | null, ps_mark?: boolean | null, specify_number?: string | null, energy_efficiency_features?: string | null } | null, motor?: { __typename?: 'Motor', model_info_id?: string | null, manufacturer_name?: string | null, country_of_manufacture?: string | null, brand_name?: string | null, first_manufactured_year?: number | null, model_number?: string | null, replaces_other_model?: boolean | null, date_marked?: boolean | null, website_url?: string | null, phase_type?: string | null, rated_power_output?: number | null, rated_voltage?: number | null, rated_frequency?: number | null, number_of_poles?: number | null, rated_speed?: number | null, motor_duty?: string | null, mounting_code?: string | null, frame_code?: string | null, enclosure_rating?: string | null, motor_design?: string | null, motor_insulation?: string | null, state_model?: string | null, date_format?: string | null } | null, ledLight?: { __typename?: 'LEDLight', model_info_id?: string | null, brand_name?: string | null, model_number?: string | null, bar_code?: string | null, lamp_type?: string | null, country_of_origin?: string | null, manufacture_date?: string | null, lamp_length?: number | null, max_diameter?: number | null, min_voltage?: number | null, max_voltage?: number | null, rated_frequency?: number | null, rated_power?: number | null, power_factor?: number | null, standby_power?: number | null, flux?: number | null, efficacy?: number | null, color_temperature?: number | null, chromaticity_tolerance?: number | null, color_rendering_index?: number | null, rated_lifetime?: number | null, mercury_content?: number | null, risk_group?: string | null, warranty_years?: number | null } | null, fan?: { __typename?: 'Fan', id: string, model_info_id: string, model_name?: string | null, rating?: string | null, size_capacity?: number | null, colors?: string | null, ps_mark?: boolean | null, specify_number?: string | null, energy_efficiency_features?: string | null } | null, ac?: { __typename?: 'AC', id: string, model_info_id: string, brand_name?: string | null, model_name?: string | null, manufacture_date?: string | null, origin_country?: string | null, kw_rating?: number | null, annual_energy_consumption?: number | null, cooling_capacity?: string | null, refrigerant_type?: string | null, colors?: string | null, ps_mark?: boolean | null, specify_number?: string | null, energy_efficiency_features?: string | null } | null } | null, payment?: Array<{ __typename?: 'Payment', id?: string | null, user_id?: string | null, product_id?: string | null, modelinfo_id?: string | null, payment_type?: string | null, amount?: number | null, payment_date?: string | null, pay_order_number?: string | null, demand_draft?: string | null, status?: string | null } | null> | null } | null> | null } | null };


export const ClientUpdateStepperDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ClientUpdateStepper"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"action"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currentStep"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stepperType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stepsInfo"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StepInfoInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientUpdateStepper"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"product_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}},{"kind":"Argument","name":{"kind":"Name","value":"action"},"value":{"kind":"Variable","name":{"kind":"Name","value":"action"}}},{"kind":"Argument","name":{"kind":"Name","value":"current_step"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currentStep"}}},{"kind":"Argument","name":{"kind":"Name","value":"stepper_type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stepperType"}}},{"kind":"Argument","name":{"kind":"Name","value":"steps_info"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stepsInfo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"stepper_type"}},{"kind":"Field","name":{"kind":"Name","value":"current_step"}},{"kind":"Field","name":{"kind":"Name","value":"steps_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labReport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"lab_id"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"model_info_id"}},{"kind":"Field","name":{"kind":"Name","value":"test_report"}},{"kind":"Field","name":{"kind":"Name","value":"report_from"}},{"kind":"Field","name":{"kind":"Name","value":"lab_country"}},{"kind":"Field","name":{"kind":"Name","value":"lab_user_name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"lab"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"father_name"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"cnic"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"profile_picture"}},{"kind":"Field","name":{"kind":"Name","value":"lab_type"}},{"kind":"Field","name":{"kind":"Name","value":"lab_origin"}},{"kind":"Field","name":{"kind":"Name","value":"lab_category"}},{"kind":"Field","name":{"kind":"Name","value":"lab_expires"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"allowed_products"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"father_name"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"cnic"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"profile_picture"}},{"kind":"Field","name":{"kind":"Name","value":"lab_type"}},{"kind":"Field","name":{"kind":"Name","value":"lab_origin"}},{"kind":"Field","name":{"kind":"Name","value":"lab_category"}},{"kind":"Field","name":{"kind":"Name","value":"lab_expires"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"allowed_products"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"applicantInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"assign_to"}},{"kind":"Field","name":{"kind":"Name","value":"assign_by"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"company_name"}},{"kind":"Field","name":{"kind":"Name","value":"company_address"}},{"kind":"Field","name":{"kind":"Name","value":"company_country"}},{"kind":"Field","name":{"kind":"Name","value":"company_province"}},{"kind":"Field","name":{"kind":"Name","value":"company_city"}},{"kind":"Field","name":{"kind":"Name","value":"factory_telephone"}},{"kind":"Field","name":{"kind":"Name","value":"factory_address"}},{"kind":"Field","name":{"kind":"Name","value":"factory_country"}},{"kind":"Field","name":{"kind":"Name","value":"factory_province"}},{"kind":"Field","name":{"kind":"Name","value":"factory_city"}},{"kind":"Field","name":{"kind":"Name","value":"office_telephone"}},{"kind":"Field","name":{"kind":"Name","value":"office_managing_director_name"}},{"kind":"Field","name":{"kind":"Name","value":"contact_person_name"}},{"kind":"Field","name":{"kind":"Name","value":"contact_person_phone"}},{"kind":"Field","name":{"kind":"Name","value":"contact_person_telephone"}},{"kind":"Field","name":{"kind":"Name","value":"contact_person_email"}},{"kind":"Field","name":{"kind":"Name","value":"registered_with_chamber"}},{"kind":"Field","name":{"kind":"Name","value":"user_agreement"}},{"kind":"Field","name":{"kind":"Name","value":"registration_number"}},{"kind":"Field","name":{"kind":"Name","value":"registration_year"}},{"kind":"Field","name":{"kind":"Name","value":"member_of_association"}},{"kind":"Field","name":{"kind":"Name","value":"membership_name"}},{"kind":"Field","name":{"kind":"Name","value":"membership_number"}},{"kind":"Field","name":{"kind":"Name","value":"membership_year"}},{"kind":"Field","name":{"kind":"Name","value":"sales_network_regions"}},{"kind":"Field","name":{"kind":"Name","value":"company_brochure"}},{"kind":"Field","name":{"kind":"Name","value":"product_brochure"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}},{"kind":"Field","name":{"kind":"Name","value":"modelInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"model_name"}},{"kind":"Field","name":{"kind":"Name","value":"estimated_production_per_anum"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"service_value"}},{"kind":"Field","name":{"kind":"Name","value":"start_rating"}},{"kind":"Field","name":{"kind":"Name","value":"remarks_comments"}},{"kind":"Field","name":{"kind":"Name","value":"refrigerator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"model_info_id"}},{"kind":"Field","name":{"kind":"Name","value":"brand_name"}},{"kind":"Field","name":{"kind":"Name","value":"model_name"}},{"kind":"Field","name":{"kind":"Name","value":"manufacture_date"}},{"kind":"Field","name":{"kind":"Name","value":"origin_country"}},{"kind":"Field","name":{"kind":"Name","value":"kw_rating"}},{"kind":"Field","name":{"kind":"Name","value":"annual_energy_consumption"}},{"kind":"Field","name":{"kind":"Name","value":"total_volume_litres"}},{"kind":"Field","name":{"kind":"Name","value":"refrigerant_type"}},{"kind":"Field","name":{"kind":"Name","value":"colors"}},{"kind":"Field","name":{"kind":"Name","value":"ps_mark"}},{"kind":"Field","name":{"kind":"Name","value":"specify_number"}},{"kind":"Field","name":{"kind":"Name","value":"energy_efficiency_features"}}]}},{"kind":"Field","name":{"kind":"Name","value":"motor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"model_info_id"}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer_name"}},{"kind":"Field","name":{"kind":"Name","value":"country_of_manufacture"}},{"kind":"Field","name":{"kind":"Name","value":"brand_name"}},{"kind":"Field","name":{"kind":"Name","value":"first_manufactured_year"}},{"kind":"Field","name":{"kind":"Name","value":"model_number"}},{"kind":"Field","name":{"kind":"Name","value":"replaces_other_model"}},{"kind":"Field","name":{"kind":"Name","value":"date_marked"}},{"kind":"Field","name":{"kind":"Name","value":"website_url"}},{"kind":"Field","name":{"kind":"Name","value":"phase_type"}},{"kind":"Field","name":{"kind":"Name","value":"rated_power_output"}},{"kind":"Field","name":{"kind":"Name","value":"rated_voltage"}},{"kind":"Field","name":{"kind":"Name","value":"rated_frequency"}},{"kind":"Field","name":{"kind":"Name","value":"number_of_poles"}},{"kind":"Field","name":{"kind":"Name","value":"rated_speed"}},{"kind":"Field","name":{"kind":"Name","value":"motor_duty"}},{"kind":"Field","name":{"kind":"Name","value":"mounting_code"}},{"kind":"Field","name":{"kind":"Name","value":"frame_code"}},{"kind":"Field","name":{"kind":"Name","value":"enclosure_rating"}},{"kind":"Field","name":{"kind":"Name","value":"motor_design"}},{"kind":"Field","name":{"kind":"Name","value":"motor_insulation"}},{"kind":"Field","name":{"kind":"Name","value":"state_model"}},{"kind":"Field","name":{"kind":"Name","value":"date_format"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ledLight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"model_info_id"}},{"kind":"Field","name":{"kind":"Name","value":"brand_name"}},{"kind":"Field","name":{"kind":"Name","value":"model_number"}},{"kind":"Field","name":{"kind":"Name","value":"bar_code"}},{"kind":"Field","name":{"kind":"Name","value":"lamp_type"}},{"kind":"Field","name":{"kind":"Name","value":"country_of_origin"}},{"kind":"Field","name":{"kind":"Name","value":"manufacture_date"}},{"kind":"Field","name":{"kind":"Name","value":"lamp_length"}},{"kind":"Field","name":{"kind":"Name","value":"max_diameter"}},{"kind":"Field","name":{"kind":"Name","value":"min_voltage"}},{"kind":"Field","name":{"kind":"Name","value":"max_voltage"}},{"kind":"Field","name":{"kind":"Name","value":"rated_frequency"}},{"kind":"Field","name":{"kind":"Name","value":"rated_power"}},{"kind":"Field","name":{"kind":"Name","value":"power_factor"}},{"kind":"Field","name":{"kind":"Name","value":"standby_power"}},{"kind":"Field","name":{"kind":"Name","value":"flux"}},{"kind":"Field","name":{"kind":"Name","value":"efficacy"}},{"kind":"Field","name":{"kind":"Name","value":"color_temperature"}},{"kind":"Field","name":{"kind":"Name","value":"chromaticity_tolerance"}},{"kind":"Field","name":{"kind":"Name","value":"color_rendering_index"}},{"kind":"Field","name":{"kind":"Name","value":"rated_lifetime"}},{"kind":"Field","name":{"kind":"Name","value":"mercury_content"}},{"kind":"Field","name":{"kind":"Name","value":"risk_group"}},{"kind":"Field","name":{"kind":"Name","value":"warranty_years"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"model_info_id"}},{"kind":"Field","name":{"kind":"Name","value":"model_name"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"size_capacity"}},{"kind":"Field","name":{"kind":"Name","value":"colors"}},{"kind":"Field","name":{"kind":"Name","value":"ps_mark"}},{"kind":"Field","name":{"kind":"Name","value":"specify_number"}},{"kind":"Field","name":{"kind":"Name","value":"energy_efficiency_features"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ac"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"model_info_id"}},{"kind":"Field","name":{"kind":"Name","value":"brand_name"}},{"kind":"Field","name":{"kind":"Name","value":"model_name"}},{"kind":"Field","name":{"kind":"Name","value":"manufacture_date"}},{"kind":"Field","name":{"kind":"Name","value":"origin_country"}},{"kind":"Field","name":{"kind":"Name","value":"kw_rating"}},{"kind":"Field","name":{"kind":"Name","value":"annual_energy_consumption"}},{"kind":"Field","name":{"kind":"Name","value":"cooling_capacity"}},{"kind":"Field","name":{"kind":"Name","value":"refrigerant_type"}},{"kind":"Field","name":{"kind":"Name","value":"colors"}},{"kind":"Field","name":{"kind":"Name","value":"ps_mark"}},{"kind":"Field","name":{"kind":"Name","value":"specify_number"}},{"kind":"Field","name":{"kind":"Name","value":"energy_efficiency_features"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"is_certificate_generated"}},{"kind":"Field","name":{"kind":"Name","value":"fan_type"}},{"kind":"Field","name":{"kind":"Name","value":"sweep_size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"modelinfo_id"}},{"kind":"Field","name":{"kind":"Name","value":"payment_type"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"payment_date"}},{"kind":"Field","name":{"kind":"Name","value":"pay_order_number"}},{"kind":"Field","name":{"kind":"Name","value":"demand_draft"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ClientUpdateStepperMutation, ClientUpdateStepperMutationVariables>;
export const ClientVerifyOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ClientVerifyOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneOtp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"emailOtp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientVerifyOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"phoneOtp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneOtp"}}},{"kind":"Argument","name":{"kind":"Name","value":"emailOtp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"emailOtp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<ClientVerifyOtpMutation, ClientVerifyOtpMutationVariables>;
export const ClientGetStepperDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ClientGetStepper"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stepperType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientGetStepper"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"product_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}},{"kind":"Argument","name":{"kind":"Name","value":"stepper_type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stepperType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"stepper_type"}},{"kind":"Field","name":{"kind":"Name","value":"current_step"}},{"kind":"Field","name":{"kind":"Name","value":"steps_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labReport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"lab_id"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"model_info_id"}},{"kind":"Field","name":{"kind":"Name","value":"test_report"}},{"kind":"Field","name":{"kind":"Name","value":"report_from"}},{"kind":"Field","name":{"kind":"Name","value":"lab_country"}},{"kind":"Field","name":{"kind":"Name","value":"lab_user_name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"lab"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"father_name"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"cnic"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"profile_picture"}},{"kind":"Field","name":{"kind":"Name","value":"lab_type"}},{"kind":"Field","name":{"kind":"Name","value":"lab_origin"}},{"kind":"Field","name":{"kind":"Name","value":"lab_category"}},{"kind":"Field","name":{"kind":"Name","value":"lab_expires"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"allowed_products"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"father_name"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"cnic"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"profile_picture"}},{"kind":"Field","name":{"kind":"Name","value":"lab_type"}},{"kind":"Field","name":{"kind":"Name","value":"lab_origin"}},{"kind":"Field","name":{"kind":"Name","value":"lab_category"}},{"kind":"Field","name":{"kind":"Name","value":"lab_expires"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"allowed_products"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"applicantInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"assign_to"}},{"kind":"Field","name":{"kind":"Name","value":"assign_by"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"company_name"}},{"kind":"Field","name":{"kind":"Name","value":"company_address"}},{"kind":"Field","name":{"kind":"Name","value":"company_country"}},{"kind":"Field","name":{"kind":"Name","value":"company_province"}},{"kind":"Field","name":{"kind":"Name","value":"company_city"}},{"kind":"Field","name":{"kind":"Name","value":"factory_telephone"}},{"kind":"Field","name":{"kind":"Name","value":"factory_address"}},{"kind":"Field","name":{"kind":"Name","value":"factory_country"}},{"kind":"Field","name":{"kind":"Name","value":"factory_province"}},{"kind":"Field","name":{"kind":"Name","value":"factory_city"}},{"kind":"Field","name":{"kind":"Name","value":"office_telephone"}},{"kind":"Field","name":{"kind":"Name","value":"office_managing_director_name"}},{"kind":"Field","name":{"kind":"Name","value":"contact_person_name"}},{"kind":"Field","name":{"kind":"Name","value":"contact_person_phone"}},{"kind":"Field","name":{"kind":"Name","value":"contact_person_telephone"}},{"kind":"Field","name":{"kind":"Name","value":"contact_person_email"}},{"kind":"Field","name":{"kind":"Name","value":"registered_with_chamber"}},{"kind":"Field","name":{"kind":"Name","value":"user_agreement"}},{"kind":"Field","name":{"kind":"Name","value":"registration_number"}},{"kind":"Field","name":{"kind":"Name","value":"registration_year"}},{"kind":"Field","name":{"kind":"Name","value":"member_of_association"}},{"kind":"Field","name":{"kind":"Name","value":"membership_name"}},{"kind":"Field","name":{"kind":"Name","value":"membership_number"}},{"kind":"Field","name":{"kind":"Name","value":"membership_year"}},{"kind":"Field","name":{"kind":"Name","value":"sales_network_regions"}},{"kind":"Field","name":{"kind":"Name","value":"company_brochure"}},{"kind":"Field","name":{"kind":"Name","value":"product_brochure"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}},{"kind":"Field","name":{"kind":"Name","value":"modelInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"model_name"}},{"kind":"Field","name":{"kind":"Name","value":"estimated_production_per_anum"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"service_value"}},{"kind":"Field","name":{"kind":"Name","value":"start_rating"}},{"kind":"Field","name":{"kind":"Name","value":"remarks_comments"}},{"kind":"Field","name":{"kind":"Name","value":"refrigerator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"model_info_id"}},{"kind":"Field","name":{"kind":"Name","value":"brand_name"}},{"kind":"Field","name":{"kind":"Name","value":"model_name"}},{"kind":"Field","name":{"kind":"Name","value":"manufacture_date"}},{"kind":"Field","name":{"kind":"Name","value":"origin_country"}},{"kind":"Field","name":{"kind":"Name","value":"kw_rating"}},{"kind":"Field","name":{"kind":"Name","value":"annual_energy_consumption"}},{"kind":"Field","name":{"kind":"Name","value":"total_volume_litres"}},{"kind":"Field","name":{"kind":"Name","value":"refrigerant_type"}},{"kind":"Field","name":{"kind":"Name","value":"colors"}},{"kind":"Field","name":{"kind":"Name","value":"ps_mark"}},{"kind":"Field","name":{"kind":"Name","value":"specify_number"}},{"kind":"Field","name":{"kind":"Name","value":"energy_efficiency_features"}}]}},{"kind":"Field","name":{"kind":"Name","value":"motor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"model_info_id"}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer_name"}},{"kind":"Field","name":{"kind":"Name","value":"country_of_manufacture"}},{"kind":"Field","name":{"kind":"Name","value":"brand_name"}},{"kind":"Field","name":{"kind":"Name","value":"first_manufactured_year"}},{"kind":"Field","name":{"kind":"Name","value":"model_number"}},{"kind":"Field","name":{"kind":"Name","value":"replaces_other_model"}},{"kind":"Field","name":{"kind":"Name","value":"date_marked"}},{"kind":"Field","name":{"kind":"Name","value":"website_url"}},{"kind":"Field","name":{"kind":"Name","value":"phase_type"}},{"kind":"Field","name":{"kind":"Name","value":"rated_power_output"}},{"kind":"Field","name":{"kind":"Name","value":"rated_voltage"}},{"kind":"Field","name":{"kind":"Name","value":"rated_frequency"}},{"kind":"Field","name":{"kind":"Name","value":"number_of_poles"}},{"kind":"Field","name":{"kind":"Name","value":"rated_speed"}},{"kind":"Field","name":{"kind":"Name","value":"motor_duty"}},{"kind":"Field","name":{"kind":"Name","value":"mounting_code"}},{"kind":"Field","name":{"kind":"Name","value":"frame_code"}},{"kind":"Field","name":{"kind":"Name","value":"enclosure_rating"}},{"kind":"Field","name":{"kind":"Name","value":"motor_design"}},{"kind":"Field","name":{"kind":"Name","value":"motor_insulation"}},{"kind":"Field","name":{"kind":"Name","value":"state_model"}},{"kind":"Field","name":{"kind":"Name","value":"date_format"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ledLight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"model_info_id"}},{"kind":"Field","name":{"kind":"Name","value":"brand_name"}},{"kind":"Field","name":{"kind":"Name","value":"model_number"}},{"kind":"Field","name":{"kind":"Name","value":"bar_code"}},{"kind":"Field","name":{"kind":"Name","value":"lamp_type"}},{"kind":"Field","name":{"kind":"Name","value":"country_of_origin"}},{"kind":"Field","name":{"kind":"Name","value":"manufacture_date"}},{"kind":"Field","name":{"kind":"Name","value":"lamp_length"}},{"kind":"Field","name":{"kind":"Name","value":"max_diameter"}},{"kind":"Field","name":{"kind":"Name","value":"min_voltage"}},{"kind":"Field","name":{"kind":"Name","value":"max_voltage"}},{"kind":"Field","name":{"kind":"Name","value":"rated_frequency"}},{"kind":"Field","name":{"kind":"Name","value":"rated_power"}},{"kind":"Field","name":{"kind":"Name","value":"power_factor"}},{"kind":"Field","name":{"kind":"Name","value":"standby_power"}},{"kind":"Field","name":{"kind":"Name","value":"flux"}},{"kind":"Field","name":{"kind":"Name","value":"efficacy"}},{"kind":"Field","name":{"kind":"Name","value":"color_temperature"}},{"kind":"Field","name":{"kind":"Name","value":"chromaticity_tolerance"}},{"kind":"Field","name":{"kind":"Name","value":"color_rendering_index"}},{"kind":"Field","name":{"kind":"Name","value":"rated_lifetime"}},{"kind":"Field","name":{"kind":"Name","value":"mercury_content"}},{"kind":"Field","name":{"kind":"Name","value":"risk_group"}},{"kind":"Field","name":{"kind":"Name","value":"warranty_years"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"model_info_id"}},{"kind":"Field","name":{"kind":"Name","value":"model_name"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"size_capacity"}},{"kind":"Field","name":{"kind":"Name","value":"colors"}},{"kind":"Field","name":{"kind":"Name","value":"ps_mark"}},{"kind":"Field","name":{"kind":"Name","value":"specify_number"}},{"kind":"Field","name":{"kind":"Name","value":"energy_efficiency_features"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ac"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"model_info_id"}},{"kind":"Field","name":{"kind":"Name","value":"brand_name"}},{"kind":"Field","name":{"kind":"Name","value":"model_name"}},{"kind":"Field","name":{"kind":"Name","value":"manufacture_date"}},{"kind":"Field","name":{"kind":"Name","value":"origin_country"}},{"kind":"Field","name":{"kind":"Name","value":"kw_rating"}},{"kind":"Field","name":{"kind":"Name","value":"annual_energy_consumption"}},{"kind":"Field","name":{"kind":"Name","value":"cooling_capacity"}},{"kind":"Field","name":{"kind":"Name","value":"refrigerant_type"}},{"kind":"Field","name":{"kind":"Name","value":"colors"}},{"kind":"Field","name":{"kind":"Name","value":"ps_mark"}},{"kind":"Field","name":{"kind":"Name","value":"specify_number"}},{"kind":"Field","name":{"kind":"Name","value":"energy_efficiency_features"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"is_certificate_generated"}},{"kind":"Field","name":{"kind":"Name","value":"fan_type"}},{"kind":"Field","name":{"kind":"Name","value":"sweep_size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"modelinfo_id"}},{"kind":"Field","name":{"kind":"Name","value":"payment_type"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"payment_date"}},{"kind":"Field","name":{"kind":"Name","value":"pay_order_number"}},{"kind":"Field","name":{"kind":"Name","value":"demand_draft"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ClientGetStepperQuery, ClientGetStepperQueryVariables>;