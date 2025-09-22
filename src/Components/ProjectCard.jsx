// src/Components/ProjectCard.jsx
import { motion } from "framer-motion";

export default function ProjectCard({ p }) {
  return (
    <section id="ProjectCard" className="items-center">
    <motion.article
      className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      {p.image && (
        <img
          src={p.image}
          alt={`${p.title} preview`}
          loading="lazy"
          className="mb-3 aspect-video w-full rounded-xl object-cover"
        />
      )}

      {/* Smooth title effect */}
      <motion.h3
        className="text-lg font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {p.title}
      </motion.h3>

      <p className="mt-1 text-sm text-white/80 flex-1">{p.description}</p>

      {!!p.tags?.length && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 px-2 py-1 text-xs text-white/75"
            >
              {t}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex gap-4">
        {p.links?.demo && (
          <a
            className="underline underline-offset-4"
            href={p.links.demo}
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        )}
        {p.links?.code && (
          <a
            className="underline underline-offset-4"
            href={p.links.code}
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        )}
      </div>
    </motion.article>
    </section>
  );
}
