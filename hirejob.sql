--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

-- Started on 2022-06-22 14:01:49

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 213 (class 1259 OID 16770)
-- Name: chat; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chat (
    id character varying(255) NOT NULL,
    worker_id character varying(255),
    company_id character varying(255),
    chat character varying(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.chat OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16709)
-- Name: experience; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.experience (
    id character varying(255) NOT NULL,
    company character varying(255),
    year date,
    about_experience character varying(255),
    craeted_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    user_id character varying(255),
    positions character varying(255),
    photo character varying(255)
);


ALTER TABLE public.experience OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16717)
-- Name: portofolio; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.portofolio (
    id character varying(255) NOT NULL,
    name_app character varying(255),
    link_repo character varying(255),
    type_app integer,
    photo character varying(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    user_id character varying(255)
);


ALTER TABLE public.portofolio OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16725)
-- Name: skills; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.skills (
    id character varying(255) NOT NULL,
    user_id character varying(255),
    skills character varying(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.skills OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16701)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    phone character varying(50) NOT NULL,
    password character varying(255) NOT NULL,
    level integer,
    is_active integer,
    is_verified integer,
    verify_token character varying,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    photo character varying,
    fullname character varying(255),
    job_desk character varying(255),
    address character varying(255),
    about character varying(255),
    workplace character varying(255),
    company character varying(255),
    "position" character varying(255),
    field_company character varying(255),
    intagram character varying(255),
    linkedin character varying(255),
    skills character varying(255)[]
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 3337 (class 0 OID 16770)
-- Dependencies: 213
-- Data for Name: chat; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.chat (id, worker_id, company_id, chat, created_at) FROM stdin;
\.


--
-- TOC entry 3334 (class 0 OID 16709)
-- Dependencies: 210
-- Data for Name: experience; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.experience (id, company, year, about_experience, craeted_at, user_id, positions, photo) FROM stdin;
f526fa09-daee-4f6c-a1ae-9e30d15774a9	BBBB	2020-12-09	Aaaaaaaaaaa	2022-06-22 13:01:12.726821+07	9a306170-fb25-4f6a-a102-92ecb1414bef	AAA	https://images.unsplash.com/photo-1655463223445-7c7cc696fdf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
\.


--
-- TOC entry 3335 (class 0 OID 16717)
-- Dependencies: 211
-- Data for Name: portofolio; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.portofolio (id, name_app, link_repo, type_app, photo, created_at, user_id) FROM stdin;
2d2ca88b-bad4-4dcf-9b80-57c1a3b33390	test	https://recipe-food.netlify.app	1	https://images.unsplash.com/photo-1655463223445-7c7cc696fdf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80	2022-06-22 12:47:21.432584+07	9a306170-fb25-4f6a-a102-92ecb1414bef
\.


--
-- TOC entry 3336 (class 0 OID 16725)
-- Dependencies: 212
-- Data for Name: skills; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.skills (id, user_id, skills, created_at) FROM stdin;
d1728778-1abc-4667-bda8-352d39086034	af4c7960-711c-41bf-987e-9610f3e291fc	java	2022-05-20 19:17:40.464968+07
c9298bf3-9332-449e-86f1-9a9a8108b44d	af4c7960-711c-41bf-987e-9610f3e291fc	css	2022-05-20 19:17:42.397145+07
1c5681e2-2341-48c6-9cc3-87fcf624d7f4	03d33a80-48ea-4673-9491-5d08201a03d9	java	2022-05-23 20:37:35.491496+07
a7970c7a-901b-469c-af54-cf574a28663c	03d33a80-48ea-4673-9491-5d08201a03d9	css	2022-05-23 20:37:35.57434+07
00f0f7de-2bb7-4bc0-a565-6020afae20d4	03d33a80-48ea-4673-9491-5d08201a03d9	php	2022-05-23 20:37:35.578245+07
d5d47b52-ef98-4757-878f-867fd8638353	af4c7960-711c-41bf-987e-9610f3e291fc	html	2022-05-20 19:17:41.319855+07
\.


--
-- TOC entry 3333 (class 0 OID 16701)
-- Dependencies: 209
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, phone, password, level, is_active, is_verified, verify_token, created_at, photo, fullname, job_desk, address, about, workplace, company, "position", field_company, intagram, linkedin, skills) FROM stdin;
940c934b-443a-4b95-b3ba-0497d67c2200	ptmaju@gmail.com	081234567899	$2b$10$HED9d4msJ3HunTZVBEevCellGUXGjW3JYDrgmixc4pM//4K2gprMG	1	1	1	\N	2022-05-30 14:48:57.020549+07	1654078766033.jpg	Maju Jaya Bersama	\N	Jakarta, Indonesia	Bersama kita maju jaya	\N	PT Maju Jaya	Direktur	Financial	@majujaya	majujaya.com	\N
03d33a80-48ea-4673-9491-5d08201a03d9	usop@gmail.com	8129299606311	$2b$10$SZdh07F/fKgN1Qf.DKSkweo1nGNYfEfz/fzpvNdeBkWP2l5UwIbvW	0	1	1	\N	2022-05-23 19:03:30.159133+07	1653822725083.jpg	Usop	Fullstack Developer	\N	\N	Bandung	\N	\N	\N	\N	\N	{php,css,javascript}
9a306170-fb25-4f6a-a102-92ecb1414bef	zorro@gmail.com	8129299606311	$2b$10$nL04aU3ndIxMZzd7ntihr.ohAn0RyZOHii6BJwE63IZM9FCkiHIGu	0	1	1	\N	2022-05-24 09:57:27.820641+07	1653831997968.jpg	Zorro	Backtend Developer	\N	\N	Yogyakarta	\N	\N	\N	\N	\N	{html,css}
af4c7960-711c-41bf-987e-9610f3e291fc	sanji@gmail.com	081234567891	$2b$10$rEp2KFDu5jW6PqGIlXWu2.UkSLwqgsjgXd/9RmKhTIcC7xt2eBm1G	0	1	1	\N	2022-05-18 22:39:41.519421+07	1653925651706.jpg	Sanji	Frontend Developer	Lampung, Indonesia	Lorem ipsum	Jakarta	\N	\N	\N	\N	\N	{css,html}
\.


--
-- TOC entry 3193 (class 2606 OID 16776)
-- Name: chat chat_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat
    ADD CONSTRAINT chat_pkey PRIMARY KEY (id);


--
-- TOC entry 3187 (class 2606 OID 16715)
-- Name: experience experience_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.experience
    ADD CONSTRAINT experience_pkey PRIMARY KEY (id);


--
-- TOC entry 3189 (class 2606 OID 16724)
-- Name: portofolio portofolio_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.portofolio
    ADD CONSTRAINT portofolio_pkey PRIMARY KEY (id);


--
-- TOC entry 3191 (class 2606 OID 16732)
-- Name: skills skills_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skills
    ADD CONSTRAINT skills_pkey PRIMARY KEY (id);


--
-- TOC entry 3185 (class 2606 OID 16707)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


-- Completed on 2022-06-22 14:01:49

--
-- PostgreSQL database dump complete
--

