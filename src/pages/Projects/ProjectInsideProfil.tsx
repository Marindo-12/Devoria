import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Header } from "../../components/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { projects } from "../../utils/data/ProjectsData/projects";
import { developers } from "../../utils/data/developerData/developers";
import { Heart, MessageCircle, Share2, ShoppingCart, Star } from "lucide-react";
import { timeAgo } from "../../utils/data/developerData/datefomat";
import "../../styles/ProjectInsideProfile.css";
import { useTranslation } from "react-i18next";

export function ProjectInsideProfil() {
  const { t } = useTranslation();
  const [open7, setOpen7] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [commentText, setCommentText] = useState("");
  const project = projects.find((p) => p.id === id);
  const devPro = developers.find((d) => d.devId === project?.devId);
  const [like, setLike] = useState(false);

  const [comments, setComments] = useState(project?.comments || []);

  const addComment = (text: string) => {
    const newComment = {
      id: uuid(),
      userId: devPro?.devId,
      username: devPro?.personal.name,
      text,
      likes: 0,
      createdAt: new Date().toISOString(),
    };
    setComments((prev) => [...prev, newComment]);
  };

  const handleComment = () => {
    setCommentText("");
    addComment(commentText);
  };

  const likeUpdate = () => {
    if (!like) project!.likes += 1;
    else project!.likes -= 1;

    setLike(!like);
  };

  const likes = (commentId: string) => {
    setComments((prev) =>
      prev.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            likes: comment.userLiked ? comment.likes - 1 : comment.likes + 1,
            userLiked: !comment.userLiked,
          };
        }
        return comment;
      })
    );
  };

  return (
    <>
      <Header open={open7} setOpen={setOpen7} />

      <main
        className={`transition-all duration-500 ease-in-out pt-40 px-6 md:px-28 ${open7 ? "pt-56" : ""
          }`}
      >
        <div
          onClick={() => navigate(-1)}
          className="flex items-center gap-3 hover:bg-neutral-100 rounded-lg p-3 w-fit cursor-pointer first-div"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left w-4 h-4" data-replit-metadata="client/src/pages/ProjectDetail.tsx:136:10" data-component-name="ArrowLeft"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
          <p className="text-sm">{t("projectInsideProfile.backToProjects")}</p>
        </div>

        <div className="second-div mt-6 border p-6 rounded-2xl bg-slate-50 grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={project?.imageUrl}
            className="rounded-2xl border-purple-500 object-cover w-full h-64 md:h-80 border shadow-xl shadow-purple-600"
          />

          <div>
            <h1 className="text-2xl font-bold mt-4">{project?.title}</h1>

            <div className="flex items-center gap-3 mt-1">
              <div className="flex gap-1">
                <Star size={20} fill="gold" color="gold" strokeWidth={1.5} />
                <p className="font-medium">{project?.reviews.rate}</p>
              </div>
              <p className="text-gray-400 text-sm">
                ({project?.reviews.review} {t("projectInsideProfile.reviews")})
              </p>
            </div>

            <hr className="mt-5" />

            <div className="mt-3">
              <p className="text-gray-500 text-sm">{t("projectInsideProfile.price")}</p>
              <p className="text-2xl text-purple-600 font-semibold mt-1">
                {project?.price}
              </p>

              <p className="text-gray-500 text-sm mt-3">{t("projectInsideProfile.deliveryTime")}</p>
              <p className="font-medium mt-1">{project?.business.timeEstimate}</p>

              <p className="text-gray-500 text-sm mt-3">{t("projectInsideProfile.support")}</p>
              <p className="font-medium mt-1">
                {project?.business.supportDuration}
              </p>
            </div>

            <hr className="mt-3" />

            <div className="mt-3">
              <button className="bg-purple-600 text-white w-full rounded-lg flex items-center gap-2 hover:bg-purple-500 py-2.5 justify-center">
                <ShoppingCart size={20} color="white" strokeWidth={1.5} />
                {t("projectInsideProfile.buyNow")}
              </button>

              <Link to={`/developer/${devPro?.id}/send-message`} className="border w-full rounded-lg flex items-center gap-2 hover:bg-slate-100 mt-4 py-2.5 justify-center dark:hover:bg-gray-400">
                {t("projectInsideProfile.contactCreator")}
              </Link>
            </div>

            <div className="second-div1 flex flex-col gap-3 mt-6 border p-3 rounded-lg shadow-sm bg-gray-50">
              <div className="flex items-center gap-2">
                <img
                  src={devPro?.personal.profileImage}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-bold text-sm">{devPro?.personal.name}</h2>
                  <p className="text-xs text-gray-500">
                    {devPro?.professional.title}
                  </p>
                </div>
              </div>
              <Link
                to={`/developer/${devPro?.id}`}
                className="w-full dark:hover:text-gray-700 p-1 text-sm rounded-md border flex items-center justify-center hover:bg-slate-100"
              >
                {t("projectInsideProfile.viewProfile")}
              </Link>
            </div>
          </div>
        </div>

        <div className="third-div mt-6 border rounded-2xl p-6 bg-slate-50">
          <h2 className="text-2xl font-bold">{t("projectInsideProfile.technologiesUsed")}</h2>
          <div className="flex dark:text-gray-700 gap-2 mt-3">
            {project?.technologies.map((tech, i) => (
              <button
                key={i}
                className="bg-gray-200 mt-3 rounded-md px-3 py-1 text-sm"
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
            
        <div className="fourth-div mt-6 border rounded-2xl p-6 bg-slate-50">
          <h2 className="text-2xl font-bold">{t("projectInsideProfile.aboutThisProject")}</h2>
          <p className="text-md mt-6 whitespace-pre-line aboutMe">
            {project?.about}
          </p>
        </div>

        <div className=" grid grid-cols-3 mt-6 gap-6">
          <div className="fifth-div1 border rounded-2xl p-6 bg-slate-50 flex flex-col items-center">
            <p className="text-purple-500 text-2xl font-semibold">
              {project?.views}
            </p>
            <p className="text-gray-500 text-sm">{t("projectInsideProfile.views")}</p>
          </div>

          <div className="border fifth-div1 rounded-2xl p-6 bg-slate-50 flex flex-col items-center">
            <p className="text-purple-500 text-2xl font-semibold">
              {project?.likes}
            </p>
            <p className="text-gray-500 text-sm">{t("projectInsideProfile.likes")}</p>
          </div>

          <div className="border fifth-div1 rounded-2xl p-6 bg-slate-50 flex flex-col items-center">
            <p className="text-purple-500 text-2xl font-semibold">
              {comments.length}
            </p>
            <p className="text-gray-500 text-sm">{t("projectInsideProfile.comments")}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-6">
          <div
            className="flex items-center justify-center border rounded-lg p-2 hover:bg-slate-50 cursor-pointer gap-2 dark:hover:text-gray-700"
            onClick={likeUpdate}
          >
            <Heart
              size={18}
              strokeWidth={1.5}
              fill={like ? "red" : "none"}
              color={like ? "red" : "black"}
            />
            <span className="text-sm">
              {t("projectInsideProfile.like")} ({project?.likes})
            </span>
          </div>

          <div className="flex items-center justify-center border rounded-lg p-2 hover:bg-slate-50 cursor-pointer gap-2 dark:hover:text-gray-700">
            <Share2 size={18} strokeWidth={1.5} />
            <span className="text-sm">{t("projectInsideProfile.share")}</span>
          </div>
        </div>

        <div className="bg-slate-50 sixth-div mt-6 rounded-2xl p-6 border">
          <div className="flex items-center gap-2">
            <MessageCircle size={24} strokeWidth={1.5} />
            <h2 className="text-xl font-semibold">
              {t("projectInsideProfile.commentsTitle")} ({comments.length})
            </h2>
          </div>

          <textarea
            placeholder={t("projectInsideProfile.commentPlaceholder")}
            className="dark:bg-gray-700 w-full border rounded-lg p-3 mt-4 resize-none h-24 focus:outline-purple-500"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          ></textarea>

          <button
            className={`mt-4 bg-purple-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-purple-700 ${commentText.trim() === "" ? "opacity-50 cursor-not-allowed" : ""
              }`}
            disabled={commentText.trim() === ""}
            onClick={handleComment}
          >
            {t("projectInsideProfile.postComment")}
          </button>

          <hr className="mt-6" />

          <div className="mt-6 flex flex-col gap-6">
            {comments.map((comment) => (
              <div key={comment.id} className="border-b pb-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center font-bold text-sm">
                    {comment.username?.charAt(0).toUpperCase() || "?"}
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-bold">{comment.username}</h3>
                      <p className="text-xs text-gray-500">
                        {timeAgo(comment.createdAt)}
                      </p>
                    </div>

                    <p className="mt-1 text-sm">{comment.text}</p>

                    <div
                      className="flex items-center gap-2 mt-2 cursor-pointer w-fit dark:hover:text-gray-500 hover:bg-zinc-100 px-2 py-1 rounded"
                      onClick={() => likes(comment.id)}
                    >
                      <Heart
                        size={16}
                        strokeWidth={1.5}
                        fill={comment.userLiked ? "red" : "none"}
                        color={comment.userLiked ? "red" : "gray"}
                      />
                      <span className="text-sm">{comment.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
