SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- \restrict HpxcebCgTxoAoRSRhDdx2r1VRHzCZLo2kSh6epRDUqQPYC8wBuJlTaTwC5A8ENr

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: custom_oauth_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_clients; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_authorizations; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_client_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_consents; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: webauthn_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: webauthn_credentials; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: ecount_session; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: push_subscriptions; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: suggestions; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id", "type") VALUES
	('post-images', 'post-images', NULL, '2026-04-08 16:43:43.041641+00', '2026-04-08 16:43:43.041641+00', true, false, NULL, NULL, NULL, 'STANDARD');


--
-- Data for Name: buckets_analytics; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: buckets_vectors; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id", "user_metadata") VALUES
	('e3cb8db4-206f-490e-ac75-81a036e8c7da', 'post-images', '04eeab48-ecf9-4b2b-0f48-2d4427605263.jpg', NULL, '2026-04-08 16:45:27.92099+00', '2026-04-08 16:45:27.92099+00', '2026-04-08 16:45:27.92099+00', '{"eTag": "\"f2e711960af3572e64ef46aec4ae8471\"", "size": 791507, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:28.000Z", "contentLength": 791507, "httpStatusCode": 200}', 'a341f168-7574-4a98-b1bc-17bf07dbec55', NULL, '{}'),
	('3057e002-354d-40b3-b8a0-467840746133', 'post-images', '0904324a-16e3-4051-0442-49874a4f3b85.jpg', NULL, '2026-04-08 16:45:28.177455+00', '2026-04-08 16:45:28.177455+00', '2026-04-08 16:45:28.177455+00', '{"eTag": "\"f2e711960af3572e64ef46aec4ae8471\"", "size": 791507, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:29.000Z", "contentLength": 791507, "httpStatusCode": 200}', '78c9ba14-4f04-46d0-b90e-c48baddec2a1', NULL, '{}'),
	('5837242b-b839-441b-9790-a5938feb6fcf', 'post-images', '2416a4f3-eda2-4b6e-0b24-5adb03b8a0d3.jpg', NULL, '2026-04-08 16:45:28.417432+00', '2026-04-08 16:45:28.417432+00', '2026-04-08 16:45:28.417432+00', '{"eTag": "\"f56aa9b3648e80882b7f99c2f8dcb06d\"", "size": 110143, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:29.000Z", "contentLength": 110143, "httpStatusCode": 200}', 'b83a9385-bdc2-476d-a166-72021193cafa', NULL, '{}'),
	('8d9ee437-ff75-4d6d-80ad-e5e83f03d3c8', 'post-images', '3a324e98-9639-4d39-0f20-262921b8dc79.jpg', NULL, '2026-04-08 16:45:28.65454+00', '2026-04-08 16:45:28.65454+00', '2026-04-08 16:45:28.65454+00', '{"eTag": "\"b9d3e14ae5b7caa802d69c767be1acd3\"", "size": 160085, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:29.000Z", "contentLength": 160085, "httpStatusCode": 200}', 'f24694b7-f4dc-4c6f-b2dd-039ca25d1b0c', NULL, '{}'),
	('0d007b33-471b-4ab2-8ebd-7f983ed6bb3b', 'post-images', '54d4b8b0-dc52-4953-057b-a64a3c46429f.jpg', NULL, '2026-04-08 16:45:28.894465+00', '2026-04-08 16:45:28.894465+00', '2026-04-08 16:45:28.894465+00', '{"eTag": "\"dc712f9117b4df63b60cd3e09e99ff68\"", "size": 133803, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:29.000Z", "contentLength": 133803, "httpStatusCode": 200}', '60309caa-0846-480b-bcb3-a17caf19c6f2', NULL, '{}'),
	('87246617-e617-425f-a485-3ad1a2fda107', 'post-images', '5601fb06-571c-460c-082a-2487d74541f7.jpg', NULL, '2026-04-08 16:45:29.215628+00', '2026-04-08 16:45:29.215628+00', '2026-04-08 16:45:29.215628+00', '{"eTag": "\"4094fa3d81e658f00b255722c9c6855f\"", "size": 287960, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:30.000Z", "contentLength": 287960, "httpStatusCode": 200}', '18b30b83-8982-4b75-bb51-3641ee97c468', NULL, '{}'),
	('e53ebdaf-b573-4c61-a2ac-e3b39b923c59', 'post-images', '58294e65-5afe-4c82-047f-653a0185eec1.jpg', NULL, '2026-04-08 16:45:29.521267+00', '2026-04-08 16:45:29.521267+00', '2026-04-08 16:45:29.521267+00', '{"eTag": "\"58840af811d69b5b68197bb73289e6f0\"", "size": 240844, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:30.000Z", "contentLength": 240844, "httpStatusCode": 200}', '1a7ae15f-a32d-40f3-947a-eab5f4b19e31', NULL, '{}'),
	('957fe8d7-503f-42ba-a700-0b98dace13ce', 'post-images', '5e70687c-d18e-4c5d-0c51-c22d76303ae2.jpg', NULL, '2026-04-08 16:45:29.966495+00', '2026-04-08 16:45:29.966495+00', '2026-04-08 16:45:29.966495+00', '{"eTag": "\"ba6af93a91bc72eeeae0f873f12ca732\"", "size": 648230, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:30.000Z", "contentLength": 648230, "httpStatusCode": 200}', 'b4a2cdee-5a53-4960-8ead-75d9d4abacfe', NULL, '{}'),
	('b242e83a-2731-4cbc-9adb-59baa0b4c5dd', 'post-images', '6a2b0ff2-9435-489f-0b0c-1f40ac770d35.jpg', NULL, '2026-04-08 16:45:30.406152+00', '2026-04-08 16:45:30.406152+00', '2026-04-08 16:45:30.406152+00', '{"eTag": "\"815af9b732235b9fe266a00a8adecdad\"", "size": 625438, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:31.000Z", "contentLength": 625438, "httpStatusCode": 200}', '4c3052b5-6b80-4d39-a28d-d50f511a0e06', NULL, '{}'),
	('aa105968-d358-4742-94fd-23a345a8a964', 'post-images', '7e476298-4960-4821-08f7-bd7ccbc5e65a.jpg', NULL, '2026-04-08 16:45:30.729851+00', '2026-04-08 16:45:30.729851+00', '2026-04-08 16:45:30.729851+00', '{"eTag": "\"2ceccd611e335d9870267d82c78b3325\"", "size": 162722, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:31.000Z", "contentLength": 162722, "httpStatusCode": 200}', '70973c6a-9c7e-419c-adbd-066a49a44206', NULL, '{}'),
	('8cf9fa2c-9f74-43d2-ba7f-4e09262edbb8', 'post-images', '9875f582-077c-4671-0a0f-ba3c47d129b7.jpg', NULL, '2026-04-08 16:45:30.972548+00', '2026-04-08 16:45:30.972548+00', '2026-04-08 16:45:30.972548+00', '{"eTag": "\"49378d4e376ceee7a8d9319eab5e61aa\"", "size": 144002, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:31.000Z", "contentLength": 144002, "httpStatusCode": 200}', '1b58f058-4c90-4527-91c1-56815c627752', NULL, '{}'),
	('45d30416-6fd6-48db-bd6c-92a827aabb40', 'post-images', 'a67b5f27-e4a7-49bc-0b2f-e92463a0c883.jpg', NULL, '2026-04-08 16:45:31.451163+00', '2026-04-08 16:45:31.451163+00', '2026-04-08 16:45:31.451163+00', '{"eTag": "\"f2e711960af3572e64ef46aec4ae8471\"", "size": 791507, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:32.000Z", "contentLength": 791507, "httpStatusCode": 200}', '0baa09ab-c5b9-4b5a-b7df-ae2e8090a278', NULL, '{}'),
	('c020db43-a111-44eb-b68c-29dab2a78a17', 'post-images', 'abfa031a-cabd-4d62-0e84-4db0b18570d0.jpg', NULL, '2026-04-08 16:45:31.77126+00', '2026-04-08 16:45:31.77126+00', '2026-04-08 16:45:31.77126+00', '{"eTag": "\"4094fa3d81e658f00b255722c9c6855f\"", "size": 287960, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:32.000Z", "contentLength": 287960, "httpStatusCode": 200}', '71e8d3d3-3527-4d33-acea-9152d1b4b16a', NULL, '{}'),
	('3c0b5069-f513-4056-9d1b-8f0a6cc80d0b', 'post-images', 'b1535118-ccbe-41b7-0397-2d66de268748.jpg', NULL, '2026-04-08 16:45:32.268275+00', '2026-04-08 16:45:32.268275+00', '2026-04-08 16:45:32.268275+00', '{"eTag": "\"f2e711960af3572e64ef46aec4ae8471\"", "size": 791507, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:33.000Z", "contentLength": 791507, "httpStatusCode": 200}', '55144ef5-76f8-41bb-a62f-092e4604ac23', NULL, '{}'),
	('0ab40503-d83b-4d44-9f29-fd7bf7da6af8', 'post-images', 'c14ea13f-8f46-4e93-0dc9-97fa78c4215b.jpg', NULL, '2026-04-08 16:45:32.571493+00', '2026-04-08 16:45:32.571493+00', '2026-04-08 16:45:32.571493+00', '{"eTag": "\"9402e43898a9061fe287dc7dce553ed8\"", "size": 660977, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:33.000Z", "contentLength": 660977, "httpStatusCode": 200}', 'c8e3bc6f-deac-4b40-b06b-4d0b1db778a7', NULL, '{}'),
	('082721e5-4137-4297-a17c-24e12d484711', 'post-images', 'c1c3d7b7-a82f-435d-0d99-1f19448ed47d.jpg', NULL, '2026-04-08 16:45:33.379136+00', '2026-04-08 16:45:33.379136+00', '2026-04-08 16:45:33.379136+00', '{"eTag": "\"209e876e10021087ba06994cd9ed8473-2\"", "size": 6123023, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:34.000Z", "contentLength": 6123023, "httpStatusCode": 200}', 'f10b3107-d86a-44f2-81d9-628903288d25', NULL, '{}'),
	('0b302ffd-4444-40a3-a8d9-31af8a68fa8f', 'post-images', 'c9d8d940-f807-434e-0dfc-c94dfd5a5b22.jpg', NULL, '2026-04-08 16:45:33.843277+00', '2026-04-08 16:45:33.843277+00', '2026-04-08 16:45:33.843277+00', '{"eTag": "\"314b3224ddc39ec008e856cc35682dbb\"", "size": 388081, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:34.000Z", "contentLength": 388081, "httpStatusCode": 200}', '94756d39-a566-42c6-919d-0d9c30326fca', NULL, '{}'),
	('642d204a-4125-4aae-9ac3-05c567aed480', 'post-images', 'd51bf295-bb8a-48ab-0606-844c0757694f.jpg', NULL, '2026-04-08 16:45:34.095264+00', '2026-04-08 16:45:34.095264+00', '2026-04-08 16:45:34.095264+00', '{"eTag": "\"58840af811d69b5b68197bb73289e6f0\"", "size": 240844, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:35.000Z", "contentLength": 240844, "httpStatusCode": 200}', 'b0d2fbea-c2c9-4287-bfc0-645ed5774ddf', NULL, '{}'),
	('421e75d5-80a2-4a94-ada3-a724f170dedb', 'post-images', 'd6dc2d7d-ff66-4886-0288-4a62fb9d5354.jpg', NULL, '2026-04-08 16:45:34.686186+00', '2026-04-08 16:45:34.686186+00', '2026-04-08 16:45:34.686186+00', '{"eTag": "\"1021e83ee5701c79ece494fb3533929b-2\"", "size": 6467604, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:35.000Z", "contentLength": 6467604, "httpStatusCode": 200}', 'fc562bc7-957a-41dd-84b8-1fb2f7713c10', NULL, '{}'),
	('d23d07bd-3161-4e92-ae42-fe794fb765cc', 'post-images', 'e682d389-6960-42ab-02f6-7a875bc741c0.jpg', NULL, '2026-04-08 16:45:35.046458+00', '2026-04-08 16:45:35.046458+00', '2026-04-08 16:45:35.046458+00', '{"eTag": "\"f2e711960af3572e64ef46aec4ae8471\"", "size": 791507, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:36.000Z", "contentLength": 791507, "httpStatusCode": 200}', 'f7a76bc3-9b11-4214-acd3-84c70941d7d0', NULL, '{}'),
	('54215119-3b43-4631-b516-4623fcfe69d4', 'post-images', 'fbb428a1-8f26-41d8-029b-7b573587e7d4.jpg', NULL, '2026-04-08 16:45:35.32436+00', '2026-04-08 16:45:35.32436+00', '2026-04-08 16:45:35.32436+00', '{"eTag": "\"f2e711960af3572e64ef46aec4ae8471\"", "size": 791507, "mimetype": "image/jpeg", "cacheControl": "no-cache", "lastModified": "2026-04-08T16:45:36.000Z", "contentLength": 791507, "httpStatusCode": 200}', 'd280fbdd-c167-43cb-a541-cb71874d6166', NULL, '{}');


--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: vector_indexes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, false);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."posts_id_seq"', 1, false);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."products_id_seq"', 1, false);


--
-- Name: suggestions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."suggestions_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

-- \unrestrict HpxcebCgTxoAoRSRhDdx2r1VRHzCZLo2kSh6epRDUqQPYC8wBuJlTaTwC5A8ENr

RESET ALL;
